import React, { useEffect, useRef } from "react";
import isMobileDevice from "../utils/isMobileDevice";
import {Box, Button} from "@mui/material";
import "../styles/Login.css"
import MetamaskStaticLogo from "../Assets/MetamaskStaticLogo";

export default function Login({ setWalletId }) {
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
        checkIfWalletIsConnected(setWalletId);
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
        <Box sx={{height: "100%",display : 'flex', justifyContent: "center", alignItems: "center", flexDirection: "column"}}>
            <div id={"container-id"}>
              <MetamaskStaticLogo/>
            </div>
            <Button size={"large"} onClick={() => connect(setWalletId)}>
                Connect to MetaMask
            </Button>

        </Box>
    );
}



