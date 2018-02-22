<template>
  <div>
    {{kk}}

    <el-form :model="formValue">
          <el-input v-model="msg" style="width:400px" placeholder="123"></el-input>
      <el-form-item label="">
        <el-upload class="upload-demo" action="/api"
        :on-success ="handleUpload"
        :on-error ="errorUpload"
        :on-preview="handlePreview" :on-remove="handleRemove" :before-remove="beforeRemove" multiple :limit="3" :on-exceed="handleExceed" :file-list="fileList">
          <el-button size="small" type="primary">点击上传</el-button>
          <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
        </el-upload>
      </el-form-item>
    </el-form>

    <el-button type="" @click="testUrl">这个是测试</el-button>

  </div>
</template>

<script>
import axios from 'axios'
import io from 'socket.io-client'
var socket = io('ws://localhost:3000', {
  'reconnectionAttempts': 10 })
// 发送数据给服务端。
socket.on('connect', () => {
  socket.emit('user_login', {
    socketId: socket.id
  })
})

export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      kk: '123',
      formValue: {
        a: 1,
        b: 2
      },
      fileList: []
    }
  },
  mounted () {
    var _this = this
    socket.on('an event', function (data) {
      console.error(data)
      _this.$message({
        message: '接收服务端数据' + data.some,
        type: 'success'
      })
    })
  },
  methods: {
    handleRemove (file, fileList) {
      console.log(file, fileList)
    },
    handlePreview (file) {
      console.log(file)
    },
    handleExceed (files, fileList) {
      this.$message.warning(`当前限制选择 3 个文件，本次选择了 ${files.length} 个文件，共选择了 ${files.length + fileList.length} 个文件`)
    },
    beforeRemove (file, fileList) {
      return this.$confirm(`确定移除 ${file.name}？`)
    },
    handleUpload (res, file, fileList) {
      if (res.result === true) {
        // 成功之后弹框，上传成功
        this.$message({
          message: '恭喜你，上传成功',
          type: 'success'
        })
      }
      console.error()
      console.error(file)
      console.error(fileList)
    },
    errorUpload (err, file, fileList) {
      console.error(err)
      console.error(file)
      console.error(fileList)
    },
    testUrl () {
      axios.get('/api').then((req, res) => {
        console.error(req)
        console.error(res)
      }).catch(err => {
        console.error(err)
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h1,
  h2 {
    font-weight: normal;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    display: inline-block;
    margin: 0 10px;
  }

  a {
    color: #42b983;
  }
</style>
