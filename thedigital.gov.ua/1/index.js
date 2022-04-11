const headerScroll = document.querySelector(".header-need-scroll");
const donateScroll = document.getElementById("donate");
const burgerBtn = document.querySelector(".btn-burger");
const imgOpenMenu = document.querySelector(".open-burger-menu");
const imgCloseMenu = document.querySelector(".close-burger-menu");

setInterval(() => {
  const scrollTopPosition = document.documentElement.scrollTop;
  if (scrollTopPosition >= 102) {
    headerScroll.classList.add("_7m_4b");
    donateScroll.classList.add("_7n_4b");
  } else {
    headerScroll.classList.remove("_7m_4b");
    donateScroll.classList.remove("_7n_4b");
  }
}, 50);

// _7m_7b

burgerBtn.addEventListener("click", () => {
  if (headerScroll.classList.contains("_7m_7b") === false) {
    headerScroll.classList.add("_7m_7b");
    burgerBtn.ariaExpanded = true;
    imgOpenMenu.style.display = "none";
    imgCloseMenu.style.display = "block";
  } else {
    headerScroll.classList.remove("_7m_7b");
    burgerBtn.ariaExpanded = false;
    imgOpenMenu.style.display = "block";
    imgCloseMenu.style.display = "none";
  }
});

//
const btnBitcoin = document.querySelector(".btn-bitcoin");
const btnEthereum = document.querySelector(".btn-ethereum");
const btnErc20 = document.querySelector(".btn-erc-20");
const btnTrc20 = document.querySelector(".btn-trc20");
const btnLuna = document.querySelector(".btn-luna");
const btnSol = document.querySelector(".btn-sol");
const btnDot = document.querySelector(".btn-dot");
//
const btnAda = document.querySelector(".btn-ada");
const btnDoge = document.querySelector(".btn-doge");
const btnHbar = document.querySelector(".btn-hbar");
const btnXmr = document.querySelector(".btn-xmr");
const btnIcx = document.querySelector(".btn-icx");
const btnCspr = document.querySelector(".btn-cspr");

//
const headerNameCrypto = document.querySelector(".header-crypto");
const contentCrypto = document.querySelector(".content-crypto");
const contentCryptoTwo = document.querySelector(".content-crypto-two");
const contentCryptoWallet = document.querySelector(".content-crypto-wallet");
const btnBackWallet = document.querySelector(".btn-back-wallet");

console.log("contentCrypto -->", contentCrypto.style.display);
const CryptoWallet = document.querySelector('#CryptoWallet')

btnBitcoin.addEventListener("click", () => {
  donateScroll.style.display = "flex";
  donateScroll.style.flexDirection = "column";
  donateScroll.style.justifyContent = "center";
  //   contentCrypto.classList.remove("_7n_bzb");
  contentCrypto.style.display = "none";
  contentCryptoTwo.style.display = "none";
  contentCryptoWallet.style.display = "block";
  btnBackWallet.style.display = "block";
  headerNameCrypto.innerHTML = "Send BTC to this address:";
  CryptoWallet.value = 'bc1qnawatc5ydngwt0xuppgkgngfe677azxjtyv5xy'
});

btnEthereum.addEventListener("click", () => {
  donateScroll.style.display = "flex";
  donateScroll.style.flexDirection = "column";
  donateScroll.style.justifyContent = "center";
  //   contentCrypto.classList.remove("_7n_bzb");
  contentCrypto.style.display = "none";
  contentCryptoTwo.style.display = "none";
  contentCryptoWallet.style.display = "block";
  btnBackWallet.style.display = "block";
  headerNameCrypto.innerHTML = "Send ETH to this address:";
  CryptoWallet.value = '0x81578320167688DD751ff19a125331De6dF9b1D1'
});

btnErc20.addEventListener("click", () => {
  donateScroll.style.display = "flex";
  donateScroll.style.flexDirection = "column";
  donateScroll.style.justifyContent = "center";
  //   contentCrypto.classList.remove("_7n_bzb");
  contentCrypto.style.display = "none";
  contentCryptoTwo.style.display = "none";
  contentCryptoWallet.style.display = "block";
  btnBackWallet.style.display = "block";
  headerNameCrypto.innerHTML = "Send USDT (ERC-20) to this address:";
  CryptoWallet.value = '0xd7a0635ae1dfb79c28aaff16b8160ffec211bec0'
});

btnTrc20.addEventListener("click", () => {
  donateScroll.style.display = "flex";
  donateScroll.style.flexDirection = "column";
  donateScroll.style.justifyContent = "center";
  //   contentCrypto.classList.remove("_7n_bzb");
  contentCrypto.style.display = "none";
  contentCryptoTwo.style.display = "none";
  contentCryptoWallet.style.display = "block";
  btnBackWallet.style.display = "block";
  headerNameCrypto.innerHTML = "Send USDT (TRC-20) to this address:";
  CryptoWallet.value = 'TMHS1xXam7m5tXvE5gPfYsDv8qdQL2LhJf'
});

btnLuna.addEventListener("click", () => {
  donateScroll.style.display = "flex";
  donateScroll.style.flexDirection = "column";
  donateScroll.style.justifyContent = "center";
  //   contentCrypto.classList.remove("_7n_bzb");
  contentCrypto.style.display = "none";
  contentCryptoTwo.style.display = "none";
  contentCryptoWallet.style.display = "block";
  btnBackWallet.style.display = "block";
  headerNameCrypto.innerHTML = "Send LUNA to this address:";
  CryptoWallet.value = 'terra188gpde0ve58ldqd65p7hmlrta0zkqqev6aa007'
});

btnSol.addEventListener("click", () => {
  donateScroll.style.display = "flex";
  donateScroll.style.flexDirection = "column";
  donateScroll.style.justifyContent = "center";
  //   contentCrypto.classList.remove("_7n_bzb");
  contentCrypto.style.display = "none";
  contentCryptoTwo.style.display = "none";
  contentCryptoWallet.style.display = "block";
  btnBackWallet.style.display = "block";
  headerNameCrypto.innerHTML = "Send SOL to this address:";
  CryptoWallet.value = 'ajeQK48PCANwf2Y7pZg1dtGB25umwQpsfN1VBuifqTV'
});

btnDot.addEventListener("click", () => {
  donateScroll.style.display = "flex";
  donateScroll.style.flexDirection = "column";
  donateScroll.style.justifyContent = "center";
  //   contentCrypto.classList.remove("_7n_bzb");
  contentCrypto.style.display = "none";
  contentCryptoTwo.style.display = "none";
  contentCryptoWallet.style.display = "block";
  btnBackWallet.style.display = "block";
  headerNameCrypto.innerHTML = "Send DOT to this address:";
  CryptoWallet.value = '12AqFjEvRP1PQW8a57njyebxnLJkPMrruUbTsypmtpga3mVk'
});

btnAda.addEventListener("click", () => {
  donateScroll.style.display = "flex";
  donateScroll.style.flexDirection = "column";
  donateScroll.style.justifyContent = "center";
  //   contentCrypto.classList.remove("_7n_bzb");
  contentCrypto.style.display = "none";
  contentCryptoTwo.style.display = "none";
  contentCryptoWallet.style.display = "block";
  btnBackWallet.style.display = "block";
  headerNameCrypto.innerHTML = "Send ADA to this address:";
  CryptoWallet.value = 'addr1q84vxfuvp97kkasl67twl0mzg2xl6uxgn0plqly7svryl782cvnccztaddmpl4uka7lkys5dl4cv3x7r7p7faqcxfluqtd82qu'
});

btnDoge.addEventListener("click", () => {
  donateScroll.style.display = "flex";
  donateScroll.style.flexDirection = "column";
  donateScroll.style.justifyContent = "center";
  //   contentCrypto.classList.remove("_7n_bzb");
  contentCrypto.style.display = "none";
  contentCryptoTwo.style.display = "none";
  contentCryptoWallet.style.display = "block";
  btnBackWallet.style.display = "block";
  headerNameCrypto.innerHTML = "Send DOGE to this address:";
  CryptoWallet.value = 'DBAwT3voriJzUfsjbwWkEMx3sNej8RuibZ'
});

btnHbar.addEventListener("click", () => {
  donateScroll.style.display = "flex";
  donateScroll.style.flexDirection = "column";
  donateScroll.style.justifyContent = "center";
  //   contentCrypto.classList.remove("_7n_bzb");
  contentCrypto.style.display = "none";
  contentCryptoTwo.style.display = "none";
  contentCryptoWallet.style.display = "block";
  btnBackWallet.style.display = "block";
  headerNameCrypto.innerHTML = "Send HBAR to this address:";
  CryptoWallet.value = '0.0.822527'
});

btnXmr.addEventListener("click", () => {
  donateScroll.style.display = "flex";
  donateScroll.style.flexDirection = "column";
  donateScroll.style.justifyContent = "center";
  //   contentCrypto.classList.remove("_7n_bzb");
  contentCrypto.style.display = "none";
  contentCryptoTwo.style.display = "none";
  contentCryptoWallet.style.display = "block";
  btnBackWallet.style.display = "block";
  headerNameCrypto.innerHTML = "Send XMR to this address:";
  CryptoWallet.value = '42cSWJFhXZ2CRUG5d4fiqHgickSES4DMBNY4ztQSYiGi3uVqtAHDsLr7bVsJodcERK6gXVVmcFk8YM8GyU2rFrb6Ajj19MS'
});

btnIcx.addEventListener("click", () => {
  donateScroll.style.display = "flex";
  donateScroll.style.flexDirection = "column";
  donateScroll.style.justifyContent = "center";
  //   contentCrypto.classList.remove("_7n_bzb");
  contentCrypto.style.display = "none";
  contentCryptoTwo.style.display = "none";
  contentCryptoWallet.style.display = "block";
  btnBackWallet.style.display = "block";
  headerNameCrypto.innerHTML = "Send ICX to this address:";
  CryptoWallet.value = 'hxc6ab2a283e99fcf8de684d5e119efba6a59cc0fd'
});

btnCspr.addEventListener("click", () => {
  donateScroll.style.display = "flex";
  donateScroll.style.flexDirection = "column";
  donateScroll.style.justifyContent = "center";
  //   contentCrypto.classList.remove("_7n_bzb");
  contentCrypto.style.display = "none";
  contentCryptoTwo.style.display = "none";
  contentCryptoWallet.style.display = "block";
  btnBackWallet.style.display = "block";
  headerNameCrypto.innerHTML = "Send CSPR to this address:";
});

btnBackWallet.addEventListener("click", () => {
  donateScroll.style.display = "";
  donateScroll.style.flexDirection = "";
  donateScroll.style.justifyContent = "";
  contentCrypto.style.display = "";
  contentCryptoTwo.style.display = "";
  contentCryptoWallet.style.display = "none";
  btnBackWallet.style.display = "none";
  headerNameCrypto.innerHTML =
    "Donate crypto to Ukraine to support people in their fight for freedom";
});

// //
const btnSendCrypto = document.querySelector(".send-crypto-nav");

btnSendCrypto.addEventListener("click", () => {
  setTimeout(() => {
    setTimeout(() => {
      donateScroll.style.border = "1px solid #2f6cf6";
      donateScroll.style.borderWidth = "2px";
      donateScroll.style.boxShadow = "none";
    });
    setTimeout(() => {
      donateScroll.style.border = "none";
      donateScroll.style.borderWidth = "none";
      donateScroll.style.boxShadow =
        "0 32px 144px rgb(0 0 0 / 15%), 0 42px 72px rgb(0 0 0 / 12%), 0 24px 32px rgb(0 0 0 / 8%), 0 8px 16px rgb(0 0 0 / 7%), 0 2px 7px rgb(0 0 0 / 5%)";
    }, 1000);
  });
});
/**
 *     border: 1px solid #2f6cf6;
    border-width: 2px;
    box-shadow: none;
 */
