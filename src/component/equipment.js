function equipment() {
  return {
    template: `<div><el-form :inline="true" :model="formInline" class="form-inline" label-position="right" size="small">
    <el-form-item label="设备号">
      <el-input v-model="formInline.tag"></el-input>
    </el-form-item>
    <el-form-item label="设备型号">
    <el-input v-model="formInline.name"></el-input>
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
      label="设备标识">
    </el-table-column>
    <el-table-column
      prop="visitNum"
      label="设备IP">
    </el-table-column>
    <el-table-column
      prop="account"
      label="设备号">
    </el-table-column>
    <el-table-column
      prop="type"
      label="设备型号">
    </el-table-column>
    <el-table-column
      prop="firstName"
      label="主控版本">
    </el-table-column>
    <el-table-column
      prop="middleName"
      label="协议版本">
    </el-table-column>
    <el-table-column
    prop="lastName"
    label="系统标识">
  </el-table-column>
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