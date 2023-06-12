import Head from 'next/head'
import Image from 'next/image'
export default function Home() {
  return (
    <>
      <Head>
        <title>Lokalogy is Under Maintenance</title>
        <meta
          name='description'
          content='Lokalogy adalah digital marketing agency Jakarta yang menyediakan layanan pembuatan website, SEO, PPC, branding dan design, SMM, dan pembuatan website.'
        />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <div className='bg-[#3D2070]/5backdrop-blur-2xl h-full py-52'>
        <main className='mx-auto flex w-full max-w-7xl flex-grow flex-col justify-center px-6 lg:px-8'>
          <div className='flex flex-shrink-0 justify-center'></div>
          <div className='py-16'>
            <div className='text-center'>
              <p className='text-base font-semibold text-indigo-600'>503</p>
              <h1 className='mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl'>
                {' '}
                Page under maintenance
              </h1>
              <p className='mt-2 text-base text-gray-500'>
                We will be here with our new awesome site.
              </p>
            </div>
          </div>
        </main>
        <footer className='mx-auto w-full max-w-7xl flex-shrink-0 px-6 lg:px-8'>
          <nav className='flex justify-center space-x-4'>
            <a
              href='https://api.whatsapp.com/send?phone=6285195901565'
              className='text-sm font-medium text-gray-500 hover:text-gray-600'
            >
              Contact Support
            </a>
          </nav>
        </footer>
      </div>
    </>
  )
}
