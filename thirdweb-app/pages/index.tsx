import { Web3Button } from "@thirdweb-dev/react"
import type { NextPage } from "next"
import styles from "../styles/Home.module.css"
import Header from "../components/Header"
import Image from "next/image"
import logo from "../image/logo.jpg"

const contractAddress = "0x3d746d0744D38999480836b0498b995B5D59E18c"

const Home: NextPage = () => {
	return (
		<div className={styles.container}>
			<Header />
			<section className={styles.info}>
				<Image className={styles.logo} src={logo} alt="logo" width="60" />
				<h1>The NFTs Project</h1>
				<p>
					Welcome to the educational session on how to build this site and claim
					an NFT using Thirdweb
				</p>
				<Web3Button
					contractAddress={contractAddress}
					action={(contract) => contract.erc721.claim(1)}
					colorMode="light"
					accentColor="#9702c4"
				>
					Claim NFT
				</Web3Button>
			</section>
		</div>
	)
}

export default Home
