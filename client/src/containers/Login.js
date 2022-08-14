import React, { useEffect, useState } from "react";
import isMobileDevice from "../utils/isMobileDevice";

export default function Login({ setUserAddress, setRefreshToken, setAccessToken}) {


    async function connect(onConnected) {
        if (!window.ethereum) {
            alert("Get MetaMask!");
            return;
        }

        const accounts = await window.ethereum.request({
            method: "eth_requestAccounts",
        });

        onConnected(accounts[0]);
    }

    async function checkIfWalletIsConnected(onConnected) {
        if (window.ethereum) {
            const accounts = await window.ethereum.request({
                method: "eth_accounts",
            });

            if (accounts.length > 0) {
                const account = accounts[0];
                onConnected(account);
                return;
            }

            if (isMobileDevice()) {
                await connect(onConnected);
            }
        }
    }

    useEffect(() => {
        checkIfWalletIsConnected(setUserAddress);
    }, []);

    if ('ontouchstart' in window || 'onmsgesturechange' in window) {
        const dappUrl = "http://localhost:3000";
        const metamaskAppDeepLink = "https://metamask.app.link/dapp/" + dappUrl;
        return (
            <a href={metamaskAppDeepLink}>
                <button>
                    Connect to MetaMask
                </button>
            </a>
        );
    }
    return (
        <button onClick={() => connect(setUserAddress)}>
            Connect to MetaMask
        </button>
    );
}


