import { ConnectWallet } from "@thirdweb-dev/react"
import Link from "next/link"
import styles from "../styles/Header.module.css"
import { useRouter } from "next/router"

const Header: React.FC = () => {
	const router = useRouter()

	return (
		<div className={styles.container}>
			<div>
				<Link
					className={router.pathname === "/" ? styles.active : styles.link}
					href={"/"}
				>
					Claim
				</Link>
				<Link
					className={router.pathname === "/Nfts" ? styles.active : styles.link}
					href={"/Nfts"}
				>
					NFTs
				</Link>
				<Link
					className={
						router.pathname === "/MyNfts" ? styles.active : styles.link
					}
					href={"/MyNfts"}
				>
					My Nfts
				</Link>
				<Link
					className={
						router.pathname === "/WriteNote" ? styles.active : styles.link
					}
					href={"/WriteNote"}
				>
					Write note
				</Link>
			</div>
			<ConnectWallet colorMode="light" accentColor="#9702c4" />
		</div>
	)
}

export default Header
