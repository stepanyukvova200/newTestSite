import React, {useEffect, useState} from "react";
import { Connection, PublicKey } from "@solana/web3.js";
import './style.scss'

async function getSolToUsdPrice(): Promise<number | null> {
    try {
        const response = await fetch("https://api.coingecko.com/api/v3/simple/price?ids=solana&vs_currencies=usd");
        if (!response.ok) {
            throw new Error(`HTTP Error: ${response.status}`);
        }
        const data = await response.json();
        return data?.solana?.usd ?? null;
    } catch (error) {
        console.error("Помилка отримання курсу SOL:", error);
        return null;
    }
}

interface SolanaWindow extends Window {
    solana?: {
        connect: () => Promise<{ publicKey: { toString: () => string } }>;
    };
}

declare const window: SolanaWindow;

const connectToWallet = async (setWalletAddress: (address: string) => void) => {
    try {
        if (!window.solana) throw new Error("Solana wallet not found");
        const response = await window.solana.connect();
        setWalletAddress(response.publicKey.toString());
    } catch (error) {
        console.error("Помилка підключення гаманця:", error);
    }
};

const Instant: React.FC = () => {
    const [value, setValue] = useState<string>("");
    const [usdPrice, setUsdPrice] = useState<number | null>(null);
    const [convertedValue, setConvertedValue] = useState<string | null>(null);
    const [isSellingFucused, setIsSellingFucused] = useState<boolean>(false);
    const [walletAddress, setWalletAddress] = useState<string | null>(null);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        let newValue = e.target.value.replace(/[^0-9.]/g, ""); // Видаляємо все, крім цифр і точки
        if (newValue.startsWith(".")) newValue = "0" + newValue; // Додаємо 0 перед точкою
        setValue(newValue);
    };

    useEffect(() => {
        if (usdPrice !== null) {
            setConvertedValue((+value * usdPrice).toFixed(2));
        }
    }, [value, usdPrice]);

    useEffect(() => {
        getSolToUsdPrice().then(setUsdPrice);
    }, []);

    return (
        <div className="instant-container">
            <div className={`instant-selling ${isSellingFucused ? "active" : ""}`}>
                <div className="selling-text">Selling</div>
                <div className="selling-info">
                    <div className="modal-dropdown">
                        <img src="/image-icon.png" alt="icon" className="dropdown-icon" />
                        <div className="value-name">SOL</div>
                        <svg width="10" height="6" viewBox="0 0 10 6" fill="inherit" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M0.292893 0.292893C0.683416 -0.097631 1.31658 -0.097631 1.7071 0.292893L4.99999 3.58579L8.29288 0.292893C8.6834 -0.0976311 9.31657 -0.0976311 9.70709 0.292893C10.0976 0.683417 10.0976 1.31658 9.70709 1.70711L5.7071 5.70711C5.31657 6.09763 4.68341 6.09763 4.29289 5.70711L0.292893 1.70711C-0.0976309 1.31658 -0.0976309 0.683417 0.292893 0.292893Z"
                                  fill="hsla(0,0%,100%,.25);" />
                        </svg>
                    </div>
                    <div className="info-money-container">
                        <input
                            type="text"
                            value={value}
                            onChange={handleChange}
                            className="money-input-main"
                            placeholder={'0.00'}
                            onFocus={() => setIsSellingFucused(true)}
                            onBlur={() => setIsSellingFucused(false)}
                        />
                        <div className="secondary-money">0.00</div>
                    </div>
                </div>
            </div>

            <div className="instant-buying">
                <div className="buying-text">Buying</div>

                <div className="info-money-container">
                    <div className="modal-dropdown">
                        <img src="/image-icon.png" alt="icon" className="dropdown-icon" />
                        <div className="value-name">USDC</div>
                        <svg width="10" height="6" viewBox="0 0 10 6" fill="inherit" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M0.292893 0.292893C0.683416 -0.097631 1.31658 -0.097631 1.7071 0.292893L4.99999 3.58579L8.29288 0.292893C8.6834 -0.0976311 9.31657 -0.0976311 9.70709 0.292893C10.0976 0.683417 10.0976 1.31658 9.70709 1.70711L5.7071 5.70711C5.31657 6.09763 4.68341 6.09763 4.29289 5.70711L0.292893 1.70711C-0.0976309 1.31658 -0.0976309 0.683417 0.292893 0.292893Z"
                                  fill="hsla(0,0%,100%,.25);" />
                        </svg>
                    </div>
                    <div className="info-money">
                        <input
                            type="text"
                            value={convertedValue?.toString()}
                            onChange={handleChange}
                            className={`money-main ${!value ? 'disabled' : ''}`}
                        />
                        <div className="secondary-money">0.00</div>
                    </div>
                </div>

                <div className="buying-info">
                    <div className="additional-info">Token Permission</div>
                </div>
            </div>

            <div className="instant-info">
                <div className="helper optimised">optimised</div>
                <div className="helper rtse">rtse</div>
            </div>

            <div className="instant-connect" onClick={() => connectToWallet(setWalletAddress)}>Connect</div>
        </div>
    );
};

export default Instant;