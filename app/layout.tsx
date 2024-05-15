import { Layout } from '@/components/dom/Layout';
import '@/global.css';

export const metadata = {
  title: 'Next.js + Three.js',
  description: 'A minimal starter for Nextjs + React-three-fiber and Threejs.',
};

export default function RootLayout({ children }) {
  return (
    <html lang='en' className='antialiased'>
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <script type='module' src='https://unpkg.com/@splinetool/viewer@1.3.5/build/spline-viewer.js' async></script>
      <spline-viewer url='https://prod.spline.design/ACIaZrgcIHTf-4qU/scene.splinecode'></spline-viewer>
      <body>
        {/* To avoid FOUT with styled-components wrap Layout with StyledComponentsRegistry https://beta.nextjs.org/docs/styling/css-in-js#styled-components */}
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
