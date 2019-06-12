<template>
  <el-form ref="loginForm" :model="form" :rules="rules" @keydown.enter.native="handleSubmit">
    <el-form-item prop="userName">
      <!--<Input v-model="form.userName" placeholder="请输入用户名">-->
        <!--<span slot="prepend">-->
          <!--<Icon :size="16" type="ios-person"></Icon>-->
        <!--</span>-->
      <!--</Input>-->
      <el-input  placeholder="请输入用户名" v-model="form.userName" >
        <i slot="suffix" class="fa fa-user"></i>
      </el-input>
    </el-form-item>
    <el-form-item prop="password">
      <!--<Input type="password" v-model="form.password" placeholder="请输入密码">-->
        <!--<span slot="prepend">-->
          <!--<Icon :size="14" type="md-lock"></Icon>-->
        <!--</span>-->
      <!--</Input>-->
      <el-input placeholder="请输入密码" v-model="form.password" >
        <i slot="suffix" class="fa fa-lock"></i>
      </el-input>
    </el-form-item>
    <el-form-item>
      <el-button @click="handleSubmit" type="primary" class="login-submit" long>登录</el-button>
    </el-form-item>
  </el-form>
</template>
<script>
export default {
  name: 'LoginForm',
  props: {
    userNameRules: {
      type: Array,
      default: () => {
        return [
          { required: true, message: '账号不能为空', trigger: 'blur' }
        ]
      }
    },
    passwordRules: {
      type: Array,
      default: () => {
        return [
          { required: true, message: '密码不能为空', trigger: 'blur' }
        ]
      }
    }
  },
  data () {
    return {
      form: {
        userName: 'super_admin',
        password: ''
      }
    }
  },
  computed: {
    rules () {
      return {
        userName: this.userNameRules,
        password: this.passwordRules
      }
    }
  },
  methods: {
    handleSubmit () {
      this.$refs.loginForm.validate((valid) => {
        if (valid) {
          this.$emit('on-success-valid', {
            userName: this.form.userName,
            password: this.form.password
          })
        }
      })
    }
  }
}
</script>
