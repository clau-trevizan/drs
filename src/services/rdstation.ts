/**
 * RD Station Marketing API Integration
 * 
 * This service handles sending contact form data to RD Station.
 * 
 * Setup instructions:
 * 1. Create an RD Station Marketing account
 * 2. Go to Settings > Integrations > API Keys
 * 3. Generate a new API Key (Private Token) or use the conversion endpoint
 * 4. Replace the placeholder values below with your actual credentials
 * 
 * Documentation: https://developers.rdstation.com/reference/conversions
 */

// TODO: Replace with actual RD Station API key when client provides it
const RD_STATION_API_KEY = 'YOUR_RD_STATION_API_KEY';
const RD_STATION_CONVERSION_URL = 'https://api.rd.services/platform/conversions';

interface RDStationConversionPayload {
  event_type: 'CONVERSION';
  event_family: 'CDP';
  payload: {
    conversion_identifier: string;
    name?: string;
    email: string;
    company?: string;
    mobile_phone?: string;
    cf_mensagem?: string;
    legal_bases?: Array<{
      category: string;
      type: string;
      status: string;
    }>;
  };
}

interface ContactFormData {
  nome: string;
  email: string;
  empresa: string;
  telefone: string;
  mensagem: string;
  privacidade: boolean;
}

export async function sendToRDStation(formData: ContactFormData): Promise<{ success: boolean; error?: string }> {
  // Don't send if API key is not configured
  if (RD_STATION_API_KEY === 'YOUR_RD_STATION_API_KEY') {
    console.warn('[RD Station] API key not configured. Skipping integration.');
    return { success: true }; // Return success so the form UX still works
  }

  const payload: RDStationConversionPayload = {
    event_type: 'CONVERSION',
    event_family: 'CDP',
    payload: {
      conversion_identifier: 'contato-site-drs',
      name: formData.nome,
      email: formData.email,
      company: formData.empresa,
      mobile_phone: formData.telefone,
      cf_mensagem: formData.mensagem,
      legal_bases: formData.privacidade
        ? [
            {
              category: 'communications',
              type: 'consent',
              status: 'granted',
            },
          ]
        : [],
    },
  };

  try {
    const response = await fetch(RD_STATION_CONVERSION_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${RD_STATION_API_KEY}`,
      },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      console.error('[RD Station] Error:', errorData);
      return { success: false, error: `RD Station API error: ${response.status}` };
    }

    return { success: true };
  } catch (error) {
    console.error('[RD Station] Network error:', error);
    return { success: false, error: 'Network error sending to RD Station' };
  }
}
