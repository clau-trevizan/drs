import { useParams, Link } from 'react-router-dom';
import { Layout } from '@/components/layout';
import { ArrowIcon } from '@/components/ui/ArrowIcon';
import iconX from '@/assets/icon-x.svg';
import iconLinkedin from '@/assets/icon-linkedin.svg';
import iconFacebook from '@/assets/icon-facebook.svg';
import { useTranslation } from '@/hooks/useTranslation';
import { useInsight, useInsights } from '@/hooks/useStrapi';
import { getStrapiMedia } from '@/services/strapi';

export default function InsightPost() {
  const { slug } = useParams();
  const { t, language } = useTranslation();
  
  const { data: post, isLoading } = useInsight(slug || '');
  const { data: allInsightsData } = useInsights({ pageSize: 50 });

  if (isLoading || !post) {
    return (
      <Layout>
        <section className="py-32 bg-background text-center">
          <p>{t('insights.search')}...</p>
        </section>
      </Layout>
    );
  }

  const attrs: any = post?.attributes || post || {};
  const categories = (attrs.categories?.data || attrs.categories || []).map((c: any) => c?.attributes?.name || c?.name || '').filter(Boolean);
  const featImg = attrs.featuredImage?.data || attrs.featuredImage;
  const featuredImage = featImg ? getStrapiMedia(featImg?.attributes?.url || featImg?.url) : undefined;

  // Similar insights: same categories
  const similarInsights = (allInsightsData?.data || [])
    .filter((i: any) => {
      const iAttrs = i?.attributes || i || {};
      const iCats = (iAttrs.categories?.data || iAttrs.categories || []).map((c: any) => c?.attributes?.name || c?.name || '');
      return iAttrs.slug !== slug && iCats.some((c: string) => categories.includes(c));
    })
    .slice(0, 2);

  const currentUrl = typeof window !== 'undefined' ? window.location.href : '';
  const shareText = encodeURIComponent(attrs.title);
  const shareUrl = encodeURIComponent(currentUrl);
  const categoryParams = categories.map(c => `cat=${encodeURIComponent(c)}`).join('&');

  const formattedDate = new Date(attrs.publishedAt).toLocaleDateString(
    language === 'en' ? 'en-US' : language === 'es' ? 'es-ES' : 'pt-BR',
    { day: '2-digit', month: 'long', year: 'numeric' }
  );

  return (
    <Layout>
      {/* Section 1: Hero */}
      <section className="politica-section1 bg-background">
        <div className="drs-container">
          <div className="politica-green-box rounded-[24px] lg:rounded-[40px]" style={{ backgroundColor: '#69C0AC', backgroundImage: 'url(/images/topo_pp.png)', backgroundPosition: 'top left', backgroundRepeat: 'no-repeat' }}>
            <div className="grid grid-cols-12">
              <div className="col-span-12 lg:col-start-2 lg:col-span-11">
                <div className="flex gap-2 mb-4">
                  {categories.map(cat => (
                    <span key={cat} style={{ color: '#000', textAlign: 'center', fontSize: '16px', fontStyle: 'normal', fontWeight: 400, lineHeight: '24px', padding: '3px 25px', borderRadius: '16px', border: '1px solid #274B41' }}>{cat}</span>
                  ))}
                </div>
                <div className="d-flex gap-4 items-start">
                  <div className="col-60">
                    <h1 style={{ color: '#000', fontSize: '35px', fontStyle: 'normal', fontWeight: 900, lineHeight: '40px' }}>{attrs.title}</h1>
                  </div>
                  <div className="col-20 flex items-center gap-3">
                    <span style={{ color: '#000', fontSize: '14px', fontWeight: 400, width: '100%' }}>{t('insights.share')}</span>
                    <a href={`https://twitter.com/intent/tweet?text=${shareText}&url=${shareUrl}`} target="_blank" rel="noopener noreferrer">
                      <img src={iconX} alt="X" className="h-[50px] w-auto" />
                    </a>
                    <a href={`https://www.linkedin.com/shareArticle?mini=true&url=${shareUrl}&title=${shareText}`} target="_blank" rel="noopener noreferrer">
                      <img src={iconLinkedin} alt="LinkedIn" className="h-[50px] w-auto" />
                    </a>
                    <a href={`https://www.facebook.com/sharer/sharer.php?u=${shareUrl}`} target="_blank" rel="noopener noreferrer">
                      <img src={iconFacebook} alt="Facebook" className="h-[50px] w-auto" />
                    </a>
                  </div>
                </div>
                <div className="mt-4" style={{ color: '#000', fontSize: '16px', fontWeight: 400, lineHeight: '21px' }}>
                  <span>{formattedDate}</span>
                  {attrs.author && <span> - {language === 'pt' ? 'por' : language === 'es' ? 'por' : 'by'} {attrs.author}</span>}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Post content */}
      <section className="politica-section2 bg-white">
        <div className="drs-container">
          <div className="grid grid-cols-12">
            <div className="col-span-12 lg:col-start-2 lg:col-span-10">
              {featuredImage && (
                <img src={featuredImage} alt={attrs.title} className="w-full rounded-2xl mb-8" />
              )}
              <div className="prose prose-lg max-w-none" style={{ color: '#000', fontSize: '18px', lineHeight: '1.6' }} dangerouslySetInnerHTML={{ __html: attrs.content }} />
            </div>
          </div>
        </div>
      </section>

      {/* Orange CTA Section */}
      <section className="py-8 bg-white">
        <div className="drs-container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center" style={{ borderRadius: '50px', padding: '70px', backgroundColor: '#F39325' }}>
            <div className="lg:col-span-4">
              <h2 style={{ fontWeight: 900, fontSize: '30px', color: '#000', lineHeight: '1.2' }}>
                {t('cta.title')}
              </h2>
            </div>
            <div className="lg:col-span-5 flex items-center">
              <Link to="/contato" className="flex items-center gap-4" style={{ borderRadius: '10px', background: '#274B41', padding: '15px 25px' }}>
                <ArrowIcon className="w-5 h-4 text-white flex-shrink-0" />
                <span style={{ fontSize: '16px', color: '#fff', fontWeight: 400 }}>
                  {t('cta.contact.text')}
                </span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Similar Insights Section */}
      {similarInsights.length > 0 && (
        <section className="py-16 bg-white" style={{ paddingBottom: '100px' }}>
          <div className="drs-container">
            <div className="grid grid-cols-12">
              <div className="col-span-12 lg:col-start-2 lg:col-span-10">
                <div className="flex items-center justify-between mb-8">
                  <h2 style={{ color: '#000', fontSize: '24px', fontWeight: 700 }}>{t('insights.similar')}</h2>
                  <Link to={`/insights?${categoryParams}`} className="drs-btn" style={{ backgroundColor: '#274B41', width: 'fit-content' }}>
                    <ArrowIcon className="w-4 h-3" />
                    {t('insights.more')}
                  </Link>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {similarInsights.map((insight) => {
                    const iAttrs = insight.attributes;
                    const iCategories = iAttrs.categories?.data?.map(c => c.attributes.name) || [];
                    const iImage = iAttrs.featuredImage?.data ? getStrapiMedia(iAttrs.featuredImage.data.attributes.url) : undefined;
                    return (
                      <Link key={iAttrs.slug} to={`/insights/${iAttrs.slug}`} className="group block" style={{ marginBottom: '50px' }}>
                        <div className="aspect-video rounded-2xl overflow-hidden mb-4" style={{ backgroundColor: '#e5e5e5' }}>
                          {iImage ? (
                            <img src={iImage} alt={iAttrs.title} className="w-full h-full object-cover" />
                          ) : (
                            <div className="w-full h-full" style={{ background: 'linear-gradient(135deg, rgba(105,192,172,0.2), rgba(243,147,37,0.2))' }} />
                          )}
                        </div>
                        <p style={{ color: '#012025', fontSize: '16px', fontWeight: 400, lineHeight: '21px', marginBottom: '8px' }}>
                          {new Date(iAttrs.publishedAt).toLocaleDateString(language === 'en' ? 'en-US' : language === 'es' ? 'es-ES' : 'pt-BR', { day: '2-digit', month: 'long', year: 'numeric' })}
                        </p>
                        <h3 className="group-hover:opacity-80 transition-opacity" style={{ color: '#000', fontSize: '20px', fontWeight: 700, lineHeight: '28.33px', letterSpacing: '0.55px', marginBottom: '12px' }}>{iAttrs.title}</h3>
                        <div className="flex flex-wrap gap-2">
                          {iCategories.map((category) => (
                            <span key={category} style={{ color: '#000', textAlign: 'center', fontSize: '16px', fontWeight: 400, lineHeight: '24px', padding: '3px 25px', borderRadius: '16px', border: '1px solid #274B41' }}>{category}</span>
                          ))}
                        </div>
                      </Link>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </section>
      )}
    </Layout>
  );
}
