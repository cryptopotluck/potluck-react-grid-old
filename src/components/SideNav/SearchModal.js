import React from "react";
import { ModalHeader } from "reactstrap";

import ListItem from "../SideModal/ListItem";
import SearchForm from "../SideModal/SearchForm";
import SideModal from "../SideModal";

import coins from "../../common/images/coins";

const coinsList = [
  "Bitcoin",
  "Ethereum (ETH)",
  "Ripple (XRP)",
  "Bitcoin Cash (BCH)",
  "EOS",
  "Stellar (XLM)",
  "Litecoin (LTC)",
  "Cardano (ADA)",
  "IOTA (MIOTA)",
  "Binance (BNB)",
  "NEO",
  "Monero (XMR)",
  "Tron (TRX)",
  "Ethereum Classic (ETC)",
  "Dash",
  "Nem",
  "Tezos (XTZ)",
  "Zcash (ZEC)",
  "OmiseGO (OMG)",
  "VeChain (VET)",
  "0x (ZRX)",
  "QTUM",
  "Bytecoin (BCN)",
  "Bitcoin Gold (BTG)",
  "Lisk (LSK)",
  "Decred (DCR)",
  "BitShares (BTS)",
  "Maker (MKR)",
  "Zilliqa (ICX)",
  "ICON (ICX)",
  "DigiByte (DGB)",
  "Aeternity (AE)",
  "Dogecoin (DOGE)",
  "Steemit (STEEM)",
  "Ontology (ONT)",
  "Augur (REP)",
  "Basic Attention Token (BAT)",
  "Siacoin (SC)",
  "MOAC",
  "Verge (XVG)",
  "Bitcoin Diamond (BCD)",
  "Bytom (BTM)",
  "RChain (RHOC)",
  "Pundi X (NPXS)",
  "KuCoin (KCS)"
];

const Header = () => (
  <ModalHeader style={{ padding: 0, zIndex: 999 }}>
    <img src={coins(45)} className="img-fluid" alt="" />
  </ModalHeader>
);

const SearchModal = ({ active, toggle }) => (
  <SideModal
    active={active}
    searchForm={<SearchForm />}
    toggle={toggle}
    header={<Header />}
  >
    {coinsList.map((coin, i) => (
      <ListItem
        avatar={coins(i)}
        href="#!"
        title={coin}
        status="Post trade"
        key={i}
      />
    ))}
  </SideModal>
);

export default SearchModal;
