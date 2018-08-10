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
  "Monero (XMR)"
];

const Header = () => (
  <ModalHeader style={{ padding: 0, zIndex: 999 }}>
    <img src={coins(12)} className="img-fluid" alt="" />
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
