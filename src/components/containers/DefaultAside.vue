<template>
  <el-tabs>
    <el-tab-pane>
      <template slot="label">
        <a class="tab-title">
        <i class='fa fa-list'></i>
        </a>
      </template>
      <div class="list-group list-group-accent">
        <div class="list-group-item list-group-item-accent-secondary bg-light text-center font-weight-bold text-muted text-uppercase small">
          Today
        </div>
        <a target="_self" class="list-group-item list-group-item-accent-warning list-group-item-divider">
          <div class="avatar float-right">
            <img class="img-avatar" :src="avatars" alt="admin@bootstrapmaster.com">
          </div>
          <div>Meeting with
            <strong>Lucas</strong>
          </div>
          <small class="text-muted mr-3">
            <i class="fa fa-calendar"></i>&nbsp;&nbsp;1 - 3pm
          </small>
          <small class="text-muted">
            <i class="fa fa-map-marker"></i>&nbsp;&nbsp;Palo Alto, CA
          </small>
        </a>
        <a target="_self" class="list-group-item list-group-item-accent-info">
          <div class="avatar float-right">
            <img class="img-avatar" :src="avatars" alt="admin@bootstrapmaster.com">
          </div>
          <div>Skype with <strong>Megan</strong>
          </div>
          <small class="text-muted mr-3"><i class="fa fa-calendar"></i>&nbsp;&nbsp;4 - 5pm</small>
          <small class="text-muted"><i class="fa fa-skype"></i>&nbsp;&nbsp;On-line</small>
        </a>
        <hr class="transparent mx-3 my-0">
        <div class="list-group-item list-group-item-accent-secondary bg-light text-center font-weight-bold text-muted text-uppercase small">
          Tomorrow
        </div>
        <a target="_self" class="list-group-item list-group-item-accent-danger list-group-item-divider">
          <div>New UI Project - <strong>deadline</strong>
          </div>
          <small class="text-muted mr-3"><i class="fa fa-calendar"></i>&nbsp;&nbsp;10 - 11pm</small>
          <small class="text-muted"><i class="fa fa-home"></i>&nbsp;&nbsp;creativeLabs HQ</small>
          <div class="avatars-stack mt-2">
            <div class="avatar avatar-xs">
              <img class="img-avatar" :src="avatars" alt="admin@bootstrapmaster.com">
            </div>
            <div class="avatar avatar-xs">
              <img class="img-avatar" :src="avatars" alt="admin@bootstrapmaster.com">
            </div>
            <div class="avatar avatar-xs">
              <img class="img-avatar" :src="avatars" alt="admin@bootstrapmaster.com">
            </div>
            <div class="avatar avatar-xs">
              <img class="img-avatar" :src="avatars" alt="admin@bootstrapmaster.com">
            </div>
            <div class="avatar avatar-xs">
              <img class="img-avatar" :src="avatars" alt="admin@bootstrapmaster.com">
            </div>
          </div>
        </a>
        <a target="_self" class="list-group-item list-group-item-accent-success list-group-item-divider">
          <div><strong>#10 Startups.Garden</strong> Meetup</div>
          <small class="text-muted mr-3"><i class="fa fa-calendar"></i>&nbsp; 1 - 3pm</small>
          <small class="text-muted"><i class="fa fa-map-marker"></i>&nbsp; Palo Alto, CA</small>
        </a>
        <a target="_self" class="list-group-item list-group-item-accent-primary list-group-item-divider">
          <div><strong>Team meeting</strong></div>
          <small class="text-muted mr-3"><i class="fa fa-calendar"></i>&nbsp; 4 - 6pm</small>
          <small class="text-muted"><i class="fa fa-home"></i>&nbsp; creativeLabs HQ</small>
          <div class="avatars-stack mt-2">
            <div class="avatar avatar-xs">
              <img :src="avatars" class="img-avatar" alt="admin@bootstrapmaster.com">
            </div>
            <div class="avatar avatar-xs">
              <img :src="avatars" class="img-avatar" alt="admin@bootstrapmaster.com">
            </div>
            <div class="avatar avatar-xs">
              <img :src="avatars" class="img-avatar" alt="admin@bootstrapmaster.com">
            </div>
            <div class="avatar avatar-xs">
              <img :src="avatars" class="img-avatar" alt="admin@bootstrapmaster.com">
            </div>
            <div class="avatar avatar-xs">
              <img :src="avatars" class="img-avatar" alt="admin@bootstrapmaster.com">
            </div>
            <div class="avatar avatar-xs">
              <img :src="avatars" class="img-avatar" alt="admin@bootstrapmaster.com">
            </div>
            <div class="avatar avatar-xs">
              <img :src="avatars" class="img-avatar" alt="admin@bootstrapmaster.com">
            </div>
          </div>
        </a>
      </div>
    </el-tab-pane>
    <el-tab-pane>
      <template slot="label">
        <a class="tab-title">
        <i class='fa fa-comments-o'></i>
        </a>
      </template>
      <div class="p-3">
        <div class="message">
          <div class="py-3 pb-5 mr-3 float-left">
            <div class="avatar">
              <img :src="avatars" class="img-avatar" alt="admin@bootstrapmaster.com">
              <span class="badge avatar-status badge-success"></span>
            </div>
          </div>
          <div>
            <small class="text-muted">Lukasz Holeczek</small>
            <small class="text-muted float-right mt-1">1:52 PM</small>
          </div>
          <div class="text-truncate font-weight-bold">Lorem ipsum dolor sit amet</div>
          <small class="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt...</small>
        </div>
        <hr>
        <div class="message">
          <div class="py-3 pb-5 mr-3 float-left">
            <div class="avatar">
              <img :src="avatars" class="img-avatar" alt="admin@bootstrapmaster.com">
              <span class="badge avatar-status badge-danger"></span>
            </div>
          </div>
          <div>
            <small class="text-muted">Lukasz Holeczek</small>
            <small class="text-muted float-right mt-1">1:52 PM</small>
          </div>
          <div class="text-truncate font-weight-bold">Lorem ipsum dolor sit amet</div>
          <small class="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt...</small>
        </div>
        <hr>
        <div class="message">
          <div class="py-3 pb-5 mr-3 float-left">
            <div class="avatar">
              <img :src="avatars" class="img-avatar" alt="admin@bootstrapmaster.com">
              <span class="badge avatar-status badge-info"></span>
            </div>
          </div>
          <div>
            <small class="text-muted">Lukasz Holeczek</small>
            <small class="text-muted float-right mt-1">1:52 PM</small>
          </div>
          <div class="text-truncate font-weight-bold">Lorem ipsum dolor sit amet</div>
          <small class="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt...</small>
        </div>
        <hr>
        <div class="message">
          <div class="py-3 pb-5 mr-3 float-left">
            <div class="avatar">
              <img :src="avatars" class="img-avatar" alt="admin@bootstrapmaster.com">
              <span class="badge avatar-status badge-warning"></span>
            </div>
          </div>
          <div>
            <small class="text-muted">Lukasz Holeczek</small>
            <small class="text-muted float-right mt-1">1:52 PM</small>
          </div>
          <div class="text-truncate font-weight-bold">Lorem ipsum dolor sit amet</div>
          <small class="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt...</small>
        </div>
        <hr>
        <div class="message">
          <div class="py-3 pb-5 mr-3 float-left">
            <div class="avatar">
              <img :src="avatars" class="img-avatar" alt="admin@bootstrapmaster.com">
              <span class="badge avatar-status badge-dark"></span>
            </div>
          </div>
          <div>
            <small class="text-muted">Lukasz Holeczek</small>
            <small class="text-muted float-right mt-1">1:52 PM</small>
          </div>
          <div class="text-truncate font-weight-bold">Lorem ipsum dolor sit amet</div>
          <small class="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt...</small>
        </div>
      </div>
    </el-tab-pane>
    <el-tab-pane>
      <template slot="label">
        <a class="tab-title">
        <i class='fa fa-gear'></i>
        </a>
      </template>
      <div class="p-3">
        <h6>Settings</h6>
        <div class="aside-options">
          <div class="clearfix mt-4">
            <small><b>Option 1</b></small>
            <c-switch color="success" label variant="pill" size="sm" class="float-right" checked />
          </div>
          <div>
            <small class="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</small>
          </div>
        </div>
        <div class="aside-options">
          <div class="clearfix mt-3">
            <small><b>Option 2</b></small>
            <c-switch color="success" label variant="pill" size="sm" class="float-right" />
          </div>
          <div>
            <small class="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</small>
          </div>
        </div>
        <div class="aside-options">
          <div class="clearfix mt-3">
            <small><b>Option 3</b></small>
            <c-switch color="success" label variant="pill" size="sm" class="float-right" disabled defaultChecked/>
          </div>
          <div>
            <small class="text-muted">Disabled option.</small>
          </div>
        </div>
        <div class="aside-options">
          <div class="clearfix mt-3">
            <small><b>Option 4</b></small>
            <c-switch color="success" label variant="pill" size="sm" class="float-right" checked />
          </div>
        </div>
        <hr>
        <h6>System Utilization</h6>
        <div class="text-uppercase mb-1 mt-4">
          <small><b>CPU Usage</b></small>
        </div>
        <el-progress :percentage="25" color="#8e71c7"></el-progress>
        <small class="text-muted">348 Processes. 1/4 Cores.</small>
        <div class="text-uppercase mb-1 mt-2">
          <small><b>Memory Usage</b></small>
        </div>
        <el-progress :percentage="70" color="#dc3545"></el-progress>
        <small class="text-muted">11444GB/16384MB</small>
        <div class="text-uppercase mb-1 mt-2">
          <small><b>SSD 1 Usage</b></small>
        </div>
        <el-progress :percentage="95" color="#ffc107"></el-progress>
        <small class="text-muted">243GB/256GB</small>
        <div class="text-uppercase mb-1 mt-2">
          <small><b>SSD 2 Usage</b></small>
        </div>
        <el-progress :percentage="10" color="#28a745"></el-progress>
        <small class="text-muted">25GB/256GB</small>
      </div>
    </el-tab-pane>
  </el-tabs>
</template>

<script>
import avatars from '@/assets/avatars/6.jpg'
import { Switch as cSwitch } from '@coreui/vue'
export default {
  name: 'DefaultAside',
  components: {
    cSwitch
  },
  data: () => {
    return {
      avatars: avatars,
      itemsCount: 42
    }
  }
}
</script>
