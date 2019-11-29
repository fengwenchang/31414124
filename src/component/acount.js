function acount() {
  return {
    template: ` <div>
    <!-- 配置区域 -->
    <el-row>
        <el-col :span="24">
            <el-card class="box-card">
                <div slot="header" class="clearfix">
                    <span>用户与授权</span>
                    <el-button type="text" style="float: right; padding: 3px 0;margin-left:10px;" @click="wrightDetail">查看授权</el-button>
                    <el-button type="text" style="float: right; padding: 3px 0;margin-left:10px;">用户策略</el-button>
                    <el-button type="text" @click="openUserModel" style="float: right; padding: 3px 0;margin-left:10px;">更改密码</el-button>
                </div>
                <el-form :model="account" status-icon ref="ruleForm" label-width="100px" class="demo-ruleForm"
                    size="small">
                    <el-form-item label="授权状态" prop="status">
                        <span v-if="account.status ===1">已授权</span>
                        <span v-if="account.status ===2">未授权</span>
                    </el-form-item>
                    <el-form-item label="用户名" prop="userName">
                        <span>{{account.userName}}</span>
                    </el-form-item>
                </el-form>
            </el-card>
        </el-col>
    </el-row>
    <el-row>
        <el-col :span="24">
            <el-card class="box-card" style="border:none;">
                <div slot="header" class="clearfix">
                    <span>证书管理</span>
                    <el-button type="text" @click="wrightDetail" style="float: right; padding: 3px 0;margin-left:10px;">保存</el-button>
                    <el-button type="text" style="float: right; padding: 3px 0;margin-left:10px;">删除</el-button>
                    <el-button type="text" @click="openUserModel" style="float: right; padding: 3px 0;margin-left:10px;">还原</el-button>
                </div>
                <el-row :gutter="40">
                    <el-col :span="12">
                        <el-divider content-position="left">Server证书</el-divider>
                        <el-form :model="certificate.server" class="form-inline" label-position="right"
                            size="mini" label-width="100px">
                            <el-form-item label="地址">
                                <el-input v-model="certificate.server.validaty"></el-input>
                            </el-form-item>
                            <el-form-item label="文件">
                                <el-upload class="upload-demo" ref="upload"
                                    action="https://jsonplaceholder.typicode.com/posts/" :multiple="isMultiple"
                                    :file-list="certificate.server.file" :auto-upload="false">
                                    <el-button slot="trigger" size="small" type="primary">选取文件</el-button>
                                </el-upload>
                            </el-form-item>
                            <el-form-item label="密码">
                                <el-input type="password" v-model="certificate.server.password"></el-input>
                            </el-form-item>
                        </el-form>
                    </el-col>
                    <el-col :span="12">
                        <el-divider content-position="left">
                            <el-checkbox v-model="certificate.ca.admin">CA证书</el-checkbox>
                        </el-divider>
                        <el-form :model="certificate.ca" class="form-inline" label-position="right" size="mini"
                            label-width="100px" v-show="certificate.ca.admin">
                            <el-form-item label="地址">
                                <el-input v-model="certificate.ca.validaty"></el-input>
                            </el-form-item>
                            <el-form-item label="文件">
                                <el-upload class="upload-demo" ref="upload"
                                    action="https://jsonplaceholder.typicode.com/posts/" :multiple="isMultiple"
                                    :file-list="certificate.ca.file" :auto-upload="false">
                                    <el-button slot="trigger" size="small" type="primary">选取文件</el-button>
                                </el-upload>
                            </el-form-item>
                            <el-form-item label="密码">
                                <el-input type="password" v-model="certificate.ca.password"></el-input>
                            </el-form-item>
                    </el-col>
                </el-row>
            </el-card>
            </el-card>
        </el-col>
    </el-row>
    <el-dialog title="修改密码" :visible="isShowUserModel" width='400px'>
        <el-form :model="passWordForm" label-width="100px" :rules="rules" ref="passWordForm">
            <el-form-item label="原密码">
                <el-input v-model="passWordForm.old" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="新密码" prop="pass">
                <el-input type="password" v-model="passWordForm.new" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="确认密码" prop="checkNew">
                <el-input type="password" v-model="passWordForm.checkNew" autocomplete="off"></el-input>
            </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
            <el-button @click="isShowUserModel = false">取 消</el-button>
            <el-button type="primary" @click="editPassword">确 定</el-button>
        </div>
    </el-dialog>

    <el-dialog title="查看授权" :visible="isShowAuthModel" width='400px'>
        <el-form label-width="100px">
            <el-form-item label="授权状态">
                已授权
            </el-form-item>
            <el-form-item label="导入授权">
                已授权
            </el-form-item>
            <el-form-item label="硬件ID" prop="pass">
                五七二七人
            </el-form-item>
            <el-form-item label="有效期" prop="checkNew">
                2099/1025 23:59:59
            </el-form-item>
            <el-form-item label="使用时长" prop="checkNew">
                1124563小时
            </el-form-item>
            <el-form-item label="启动次数" prop="checkNew">
                345
            </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
            <el-button @click="isShowAuthModel = false">取 消</el-button>
            <el-button type="primary" @click="updateAuth">确 定</el-button>
        </div>
    </el-dialog>
</div>
  `,
    data() {
      var validateNew = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入密码'));
        } else {
          if (this.passWordForm.checkNew !== '') {
            this.$refs.ruleForm.validateField('checkNew');
          }
          callback();
        }
      }
      var validateCheckNew = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请再次输入密码'));
        } else if (value !== this.passWordForm.new) {
          callback(new Error('两次输入密码不一致!'));
        } else {
          callback();
        }
      }
      return {
        account: {
          status: 1,
          userName: '张望'
        },
        certificate: {
          server: {
            validaty: '',
            file: [],
            password: ''
          },
          ca: {
            validaty: '',
            file: [],
            password: '',
            admin: false
          }
        },
        isMultiple: false,
        isShowUserModel: false,
        passWordForm: {
          new: '',
          old: '',
          checkNew: ''
        },
        rules: {
          new: [
            {
              validator: validateNew, trigger: 'blur'
            }
          ],
          checkNew: [
            {
              validator: validateCheckNew, trigger: 'blur'
            }
          ]
        },
        isShowAuthModel: false
      }
    },
    methods: {
      openUserModel() {
        this.isShowUserModel = true;
        this.$nextTick(() => {
          this.$refs['passWordForm'].resetFields();
        });
      },
      editPassword() {
        this.$refs.passWordForm.validate((valid) => {
          if (valid) {
            alert('submit!');
            this.isShowUserModel = false
          } else {
            return false;
          }
        });
      },
      wrightDetail() {
        this.isShowAuthModel = true;
      }
    }
  }
}