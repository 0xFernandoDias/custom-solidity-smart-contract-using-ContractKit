import { NextPage } from "next"
import { useState } from "react"
import styles from "../styles/WriteNote.module.css"
import Header from "../components/Header"
import { useContract, useContractWrite } from "@thirdweb-dev/react"

const contractAddress = "0x3d746d0744D38999480836b0498b995B5D59E18c"

const WriteNote: NextPage = () => {
	const [id, setId] = useState("")
	const [note, setNote] = useState("")

	const { contract } = useContract(contractAddress)
	const {
		mutate: write,
		isLoading,
		error,
	} = useContractWrite(contract, "writeNote")

	return (
		<div className={styles.container}>
			<Header />
			<section className={styles.info}>
				<p className="label">ID:</p>
				<input
					type="text"
					name="id"
					value={id}
					onChange={(e) => setId(e.target.value)}
				/>
				<p className="label">Note:</p>
				<textarea
					name="note"
					rows={10}
					value={note}
					onChange={(e) => setNote(e.target.value)}
				/>
				<br />
				<button
					disabled={isLoading}
					onClick={() => {
						write([id, note])
					}}
				>
					Write Note
				</button>
				{error ? <p>{error.toString()}</p> : null}
			</section>
		</div>
	)
}

export default WriteNote
