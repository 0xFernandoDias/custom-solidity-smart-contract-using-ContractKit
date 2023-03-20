import { NextPage } from "next"
import React, { useState } from "react"
import styles from "../styles/MyNfts.module.css"
import Header from "../components/Header"
import {
	ThirdwebNftMedia,
	useAddress,
	useContract,
	useNFTs,
} from "@thirdweb-dev/react"

const contractAddress = "0x3d746d0744D38999480836b0498b995B5D59E18c"

const MyNfts: NextPage = () => {
	const [message, setMessage] = useState("")
	const { contract } = useContract(contractAddress)
	const { data: nfts, isLoading, error } = useNFTs(contract)
	const address = useAddress()

	const readNote = (id: string) => {
		contract
			?.call("notes", id)
			.then((data) => setMessage(data))
			.catch(() => setMessage(""))
	}

	return (
		<div className={styles.container}>
			<Header />
			{message ? <p>Note: {message}</p> : null}
			<section className={styles.info}>
				{isLoading ? (
					<p>Loading...</p>
				) : (
					nfts
						?.filter((nft) => nft.owner === address)
						?.map((nft) => {
							return (
								<div key={nft.metadata.id}>
									<ThirdwebNftMedia
										metadata={nft.metadata}
										height="200"
										style={{ borderRadius: "10px" }}
									/>
									<p>
										ID: {nft.metadata.id} | {nft.metadata.name}
									</p>
									<button
										type="button"
										onClick={() => readNote(nft.metadata.id)}
									>
										Read Note
									</button>
								</div>
							)
						})
				)}
			</section>
		</div>
	)
}

export default MyNfts
