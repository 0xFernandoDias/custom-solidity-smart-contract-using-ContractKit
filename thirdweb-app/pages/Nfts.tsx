import { NextPage } from "next"
import React from "react"
import styles from "../styles/Nfts.module.css"
import Header from "../components/Header"
import { useNFTs, useContract, ThirdwebNftMedia } from "@thirdweb-dev/react"

// Your smart contract address
const contractAddress = "0x3d746d0744D38999480836b0498b995B5D59E18c"

const Nfts: NextPage = () => {
	const { contract } = useContract(contractAddress)
	const { data: nfts, isLoading, error } = useNFTs(contract)

	return (
		<div className={styles.container}>
			<Header />
			<section className={styles.info}>
				{isLoading ? (
					<p>Loading...</p>
				) : (
					nfts?.map((nft) => {
						return (
							<div key={nft.metadata.id}>
								<ThirdwebNftMedia
									metadata={nft.metadata}
									height="200"
									style={{ borderRadius: "10px" }}
								/>
								<p>{nft.metadata.name}</p>
							</div>
						)
					})
				)}
			</section>
		</div>
	)
}

export default Nfts
