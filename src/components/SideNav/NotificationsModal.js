import React from "react";

import Header from "../SideModal/Header";
import SideModal from "../SideModal";
import UserListItem from "../SideModal/UserListItem";

import avatars from "../../common/images/avatars";

const NotificationsModal = ({ active, toggle }) => (
  <SideModal
    active={active}
    header={<Header title="Notifications" toggle={toggle} />}
    toggle={toggle}
  >
    <UserListItem
      action="shared your post"
      avatar={avatars(0)}
      title="Dianna Smiley"
      time="2m"
    />
    <UserListItem
      action="reacted to your post with a 😍"
      avatar={avatars(1)}
      title="Ab Hadley"
      time="2m"
    />
    <UserListItem
      action="commented"
      avatar={avatars(2)}
      subtitle="I don’t think this really makes sense to do without approval from Johnathan since he’s the one..."
      title="Adolfo Hess"
      time="2m"
    />
    <UserListItem
      action="subscribed to you."
      avatar={avatars(3)}
      title="Daniela Dewitt"
      time="2m"
    />
    <UserListItem
      action="shared your post"
      avatar={avatars(4)}
      title="Miyah Myles"
      time="2m"
    />
    <UserListItem
      action="reacted to your post with a 😍"
      avatar={avatars(5)}
      title="Ryu Duke"
      time="2m"
    />
    <UserListItem
      action="commented"
      avatar={avatars(6)}
      subtitle="I don’t think this really makes sense to do without approval from Johnathan since he’s the one..."
      title="Glen Rouse"
      time="2m"
    />
    <UserListItem
      action="subscribed to you."
      avatar={avatars(7)}
      title="Grace Gross"
      time="2m"
    />
  </SideModal>
);

export default NotificationsModal;
