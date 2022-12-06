import Head from 'next/head'
import Image from 'next/image'
import Banner from '../components/Banner'
import ExtraProduct from '../components/ExtraProduct'
import Blogs from '../components/Blogs'
import Products from '../components/Products'
import SaleFurniture from '../components/SaleFurniture'

export default function Home() {
  return (
    <div>
      <Head>
        <title>FURNS Furniture</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Banner />
      <ExtraProduct />
      <Products />
      <SaleFurniture />
      <Blogs />
    </div>
  )
}
