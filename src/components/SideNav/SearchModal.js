import React from "react";

import ListItem from "../SideModal/ListItem";
import SearchForm from "../SideModal/SearchForm";
import SideModal from "../SideModal";

import avatars from "../../common/images/avatars";
import projects from "../../common/images/projects";
import teams from "../../common/images/teams";

const SearchModal = ({ active, toggle }) => (
  <SideModal active={active} searchForm={<SearchForm />} toggle={toggle}>
    <ListItem
      avatar={teams(0)}
      href="#!"
      title="Airbnb"
      time="Updated 2hr ago"
    />
    <ListItem
      avatar={teams(1)}
      href="#!"
      title="Medium Corporation"
      time="Updated 2hr ago"
    />
    <ListItem
      avatar={projects(0)}
      href="#!"
      title="Homepage Redesign"
      time="Updated 4hr ago"
    />
    <ListItem
      avatar={projects(1)}
      href="#!"
      title="Travels & Time"
      time="Updated 4hr ago"
    />
    <ListItem
      avatar={projects(2)}
      href="#!"
      title="Safari Exploration"
      time="Updated 4hr ago"
    />
    <ListItem
      avatar={avatars(0)}
      href="#!"
      title="Dianna Smiley"
      status="Online"
    />
    <ListItem
      avatar={avatars(1)}
      href="#!"
      title="Ab Hadley"
      status="Offline"
    />
  </SideModal>
);

export default SearchModal;
