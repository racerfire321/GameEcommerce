import SanityClient from 'next-sanity-client';

const client = new SanityClient({
  projectId: process.env.NEXT_PUBLIC_Sanity_project_id as string,
  dataset: process.env.NEXT_PUBLIC_Sanity_dataset as string,
  useCdn: process.env.NODE_ENV === 'production',
});

export default client