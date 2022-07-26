import Head from 'next/head'
import {Carta} from '../components/carta'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>@Lembo</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1 className='
      text-3xl text-center my-10 uppercase
      '>pagina web fake del buen 
      <a href='https://twitter.com/Lembo006/' className='font-extrabold'> @Lembo006 </a> 
       para cuando el <span className='font-extrabold'> @Lembo </span> 😁</h1>
      <div className='grid grid-cols-4'>
        <Carta img='https://pbs.twimg.com/media/FWrPbj6WYAI79uJ?format=jpg&name=4096x4096'/> 
        <Carta img='https://pbs.twimg.com/media/FWrPcDRXwAA6TDc?format=jpg&name=4096x4096'/> 
        <Carta img='https://pbs.twimg.com/media/FXUM7GUXgAEv_bi?format=jpg&name=large'/> 
        <Carta img='https://pbs.twimg.com/media/FXkFFM9XoAIta7b?format=jpg&name=large'/> 
        <Carta img='https://pbs.twimg.com/media/FYdVmvQXwAAvAyZ?format=jpg&name=large'/> 
        <Carta img='https://pbs.twimg.com/media/FWsxH-vWIAEsvpY?format=jpg&name=large'/>
        <Carta img='https://pbs.twimg.com/media/FWR1K5HXEAASJRV?format=jpg&name=large' />
        <Carta img='https://pbs.twimg.com/media/FWQofs2XgAcheEi?format=jpg&name=large' />
      </div>
    </div>
  )
}
