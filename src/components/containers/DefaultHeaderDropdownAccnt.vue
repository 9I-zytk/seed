<template>
  <!--<AppHeaderDropdown right no-caret>-->
    <!--<template slot="header">-->
      <!--<img-->
        <!--src="avatars"-->
        <!--class="img-avatar"-->
        <!--alt="admin@bootstrapmaster.com" />-->
    <!--</template>-->
    <!--<template slot="dropdown">-->
      <!--<b-dropdown-header tag="div" class="text-center"><strong>Account</strong></b-dropdown-header>-->
      <!--<b-dropdown-item><i class="fa fa-bell-o" /> Updates-->
        <!--<b-badge variant="info">{{ itemsCount }}</b-badge>-->
      <!--</b-dropdown-item>-->
      <!--<b-dropdown-item><i class="fa fa-envelope-o" /> Messages-->
        <!--<b-badge variant="success">{{ itemsCount }}</b-badge>-->
      <!--</b-dropdown-item>-->
      <!--<b-dropdown-item><i class="fa fa-tasks" /> Tasks-->
        <!--<b-badge variant="danger">{{ itemsCount }}</b-badge>-->
      <!--</b-dropdown-item>-->
      <!--<b-dropdown-item><i class="fa fa-comments" /> Comments-->
        <!--<b-badge variant="warning">{{ itemsCount }}</b-badge>-->
      <!--</b-dropdown-item>-->
      <!--<b-dropdown-header-->
        <!--tag="div"-->
        <!--class="text-center">-->
        <!--<strong>Settings</strong>-->
      <!--</b-dropdown-header>-->
      <!--<b-dropdown-item><i class="fa fa-user" /> Profile</b-dropdown-item>-->
      <!--<b-dropdown-item><i class="fa fa-wrench" /> Settings</b-dropdown-item>-->
      <!--<b-dropdown-item><i class="fa fa-usd" /> Payments-->
        <!--<b-badge variant="secondary">{{ itemsCount }}</b-badge>-->
      <!--</b-dropdown-item>-->
      <!--<b-dropdown-item><i class="fa fa-file" /> Projects-->
        <!--<b-badge variant="primary">{{ itemsCount }}</b-badge>-->
      <!--</b-dropdown-item>-->
      <!--<b-dropdown-divider />-->
      <!--<b-dropdown-item><i class="fa fa-shield" /> Lock Account</b-dropdown-item>-->
      <!--<b-dropdown-item><i class="fa fa-lock" /> Logout</b-dropdown-item>-->
    <!--</template>-->
  <!--</AppHeaderDropdown>-->
  <el-dropdown trigger="click">
      <img
        :src="avatars"
        class="img-avatar"
        alt="admin@bootstrapmaster.com" />
    <el-dropdown-menu slot="dropdown" class="avatar-dropdown">
      <div class="dropdown-header text-center"><strong>Account</strong></div>
      <a role="menuitem" target="_self" href="#" class="dropdown-item">
        <i class="fa fa-bell-o"></i> Updates
        <span class="badge badge-info" v-html="itemsCount"></span>
      </a>
      <a role="menuitem" target="_self" href="#" class="dropdown-item">
        <i class="fa fa-envelope-o"></i> Messages
        <span class="badge badge-success" v-html="itemsCount"></span>
      </a>
      <a role="menuitem" target="_self" href="#" class="dropdown-item">
        <i class="fa fa-tasks"></i> Tasks
        <span class="badge badge-danger" v-html="itemsCount"></span>
      </a>
      <a role="menuitem" target="_self" href="#" class="dropdown-item">
        <i class="fa fa-comments"></i> Comments
        <span class="badge badge-warning" v-html="itemsCount"></span>
      </a>
      <div class="dropdown-header text-center"><strong>Settings</strong></div>
      <a role="menuitem" target="_self" href="#" class="dropdown-item">
        <i class="fa fa-user"></i> Profile</a>
      <a role="menuitem" target="_self" href="#" class="dropdown-item"><i class="fa fa-wrench"></i> Settings</a>
      <a role="menuitem" target="_self" href="#" class="dropdown-item"><i class="fa fa-usd"></i> Payments
        <span class="badge badge-secondary" v-html="itemsCount"></span></a>
      <a role="menuitem" target="_self" href="#" class="dropdown-item"><i class="fa fa-file"></i> Projects
        <span class="badge badge-primary" v-html="itemsCount"></span>
      </a>
      <!--<div role="separator" class="dropdown-divider"></div>-->
      <div class="dropdown-header text-center"><strong>Auth</strong></div>
      <a role="menuitem" target="_self" href="#" class="dropdown-item"><i class="fa fa-shield"></i> Lock Account</a>
      <a role="menuitem" target="_self" href="#" class="dropdown-item"><i class="fa fa-lock"></i> Logout</a>
    </el-dropdown-menu>
  </el-dropdown>
</template>

<script>
// import { HeaderDropdown as AppHeaderDropdown } from '@coreui/vue'
import avatars from '@/assets/avatars/6.jpg'
export default {
  name: 'DefaultHeaderDropdownAccnt',
  // components: {
  //   AppHeaderDropdown
  // },
  data: () => {
    return {
      avatars: avatars,
      itemsCount: 42
    }
  }
}
</script>
<style>
  .img-avatar {
    height: 35px;
    margin: 0 10px;
  }
  ul.avatar-dropdown {
    margin-top: 0 !important;
    padding: 0;
    max-height: 100%;
    overflow: hidden;
  }
  .avatar-dropdown .dropdown-item {
    position: relative;
    padding: 10px 20px;
    border-bottom: 1px solid #c8ced3;
    min-width: 180px;
  }
</style>
