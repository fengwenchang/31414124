function patient() {
  return {
    template: `<div><el-form :inline="true" :model="formInline" class="form-inline" label-position="right" size="small">
    <el-form-item label="病人信息标识">
      <el-input v-model="formInline.tag"></el-input>
    </el-form-item>
    <el-form-item label="姓名">
    <el-input v-model="formInline.name"></el-input>
  </el-form-item>
    <el-form-item label="病人类型">
      <el-select v-model="formInline.type" placeholder="活动区域">
        <el-option label="区域一" value="shanghai"></el-option>
        <el-option label="区域二" value="beijing"></el-option>
      </el-select>
    </el-form-item>
    <el-form-item label="入院日期">
    <el-date-picker
    v-model="formInline.time"
    type="datetime"
    placeholder="选择日期时间"
    align="right"
    :picker-options="pickerOptions">
  </el-date-picker>
  </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="query">查询</el-button>
    </el-form-item>
    <el-form-item>
    <el-button type="primary" @click="reset">重置</el-button>
  </el-form-item>
  </el-form>
  <div class="el-table-style">
  <div class="el-table-user">
  <el-table :data="tablecurData">
    <el-table-column
      fixed
      prop="number"
      label="病历号">
    </el-table-column>
    <el-table-column
      prop="visitNum"
      label="访问号">
    </el-table-column>
    <el-table-column
      prop="account"
      label="账号">
    </el-table-column>
    <el-table-column
      prop="type"
      label="病人类型">
    </el-table-column>
    <el-table-column
      prop="firstName"
      label="姓">
    </el-table-column>
    <el-table-column
      prop="middleName"
      label="中间名">
    </el-table-column>
    <el-table-column
    prop="lastName"
    label="名">
  </el-table-column>
  <el-table-column
    prop="sex"
    label="性别">
  </el-table-column>
  <el-table-column
    prop="bloodType"
    label="血型">
  </el-table-column>
  <el-table-column
  prop="birth"
  label="出生日期">
</el-table-column>
<el-table-column
prop="begin"
label="入院日期">
</el-table-column>
  </el-table>
  </div>
  </div>
  <div class="el-page-pagination">
  <el-pagination
  @size-change="handleSizeChange"
  @current-change="handleCurrentChange"
  :current-page.sync="pagination.cur"
  :page-sizes="pagination.sizes"
  :page-size.sync="pagination.size"
  layout="sizes, prev, pager, next"
  :total="pagination.total">
</el-pagination>
  </div>
  </div>
  `,
    data() {
      return {
        formInline: {
          tag: '',
          name: '',
          type: '',
          time: ''
        },
        pagination: {
          cur: 1,
          sizes: [5, 10, 20, 30, 50],
          size: 5,
          total: 0
        },
        tableData: [{
          number: '1',
          visitNum: '1',
          account: 'zhangxiaowen',
          type: '住院',
          firstName: '张',
          middleName: '小',
          lastName: '文',
          sex: '男',
          bloodType: 'A',
          birth: '1990/10/02',
          begin: '2018/10/25'
        }, {
          number: '2',
          visitNum: '1',
          account: 'zhangxiaowen',
          type: '住院',
          firstName: '张',
          middleName: '小',
          lastName: '文',
          sex: '男',
          bloodType: 'A',
          birth: '1990/10/02',
          begin: '2018/10/25'
        }, {
          number: '3',
          visitNum: '1',
          account: 'zhangxiaowen',
          type: '住院',
          firstName: '张',
          middleName: '小',
          lastName: '文',
          sex: '男',
          bloodType: 'A',
          birth: '1990/10/02',
          begin: '2018/10/25'
        }, {
          number: '4',
          visitNum: '1',
          account: 'zhangxiaowen',
          type: '住院',
          firstName: '张',
          middleName: '小',
          lastName: '文',
          sex: '男',
          bloodType: 'A',
          birth: '1990/10/02',
          begin: '2018/10/25'
        }, {
          number: '5',
          visitNum: '1',
          account: 'zhangxiaowen',
          type: '住院',
          firstName: '张',
          middleName: '小',
          lastName: '文',
          sex: '男',
          bloodType: 'A',
          birth: '1990/10/02',
          begin: '2018/10/25'
        }, {
          number: '6',
          visitNum: '1',
          account: 'zhangxiaowen',
          type: '住院',
          firstName: '张',
          middleName: '小',
          lastName: '文',
          sex: '男',
          bloodType: 'A',
          birth: '1990/10/02',
          begin: '2018/10/25'
        }, {
          number: '7',
          visitNum: '1',
          account: 'zhangxiaowen',
          type: '住院',
          firstName: '张',
          middleName: '小',
          lastName: '文',
          sex: '男',
          bloodType: 'A',
          birth: '1990/10/02',
          begin: '2018/10/25'
        }, {
          number: '8',
          visitNum: '1',
          account: 'zhangxiaowen',
          type: '住院',
          firstName: '张',
          middleName: '小',
          lastName: '文',
          sex: '男',
          bloodType: 'A',
          birth: '1990/10/02',
          begin: '2018/10/25'
        }, {
          number: '9',
          visitNum: '1',
          account: 'zhangxiaowen',
          type: '住院',
          firstName: '张',
          middleName: '小',
          lastName: '文',
          sex: '男',
          bloodType: 'A',
          birth: '1990/10/02',
          begin: '2018/10/25'
        }, {
          number: '10',
          visitNum: '1',
          account: 'zhangxiaowen',
          type: '住院',
          firstName: '张',
          middleName: '小',
          lastName: '文',
          sex: '男',
          bloodType: 'A',
          birth: '1990/10/02',
          begin: '2018/10/25'
        }],
        pickerOptions: {
          shortcuts: [{
            text: '今天',
            onClick(picker) {
              picker.$emit('pick', new Date());
            }
          }, {
            text: '昨天',
            onClick(picker) {
              const date = new Date();
              date.setTime(date.getTime() - 3600 * 1000 * 24);
              picker.$emit('pick', date);
            }
          }, {
            text: '一周前',
            onClick(picker) {
              const date = new Date();
              date.setTime(date.getTime() - 3600 * 1000 * 24 * 7);
              picker.$emit('pick', date);
            }
          }]
        }
      }
    },
    computed: {
      tablecurData() {
        return this.tableData.slice((this.pagination.cur - 1) * this.pagination.size, this.pagination.cur * this.pagination.size)
      }
    },
    methods: {
      onSubmit() {
        console.log('submit!');
      },
      query() {

      },
      reset() {
        
      },
      handleSizeChange(val) {
        this.pagination.size = val;
      },
      handleCurrentChange(val) {
        this.pagination.cur = val;
      }
    },
    created() {
      this.pagination.total = this.tableData.length;
    }
  }
}