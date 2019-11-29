function log() {
  return {
    template: `<div><el-form :inline="true" :model="formInline" class="form-inline" label-position="right" size="small">
    <el-form-item label="类型">
      <el-input v-model="formInline.tag"></el-input>
    </el-form-item>
    <el-form-item label="起始时间">
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
    <el-button type="primary" @click="reset">导出</el-button>
  </el-form-item>
  </el-form>
  <div class="el-table-style">
  <div class="el-table-user">
  <el-table :data="tablecurData">
    <el-table-column
      fixed
      prop="time"
      label="日志时间" width="200">
    </el-table-column>
    <el-table-column
      prop="info"
      label="日志信息">
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
          time: '2018/10/25 23:59:59',
          info:'Config:用户登陆了配置工具'
        }, {
          time: '2018/10/25',
          info:'更新保存通道。通道4开通地址127.0.158.123ADT查询端口3360'
        }, {
          time: '2018/10/25',
          info:'更新保存通道。通道4开通地址127.0.158.123ADT查询端口3360'
        }, {
           time: '2018/10/25',
          info:'更新保存通道。通道4开通地址127.0.158.123ADT查询端口3360'
        }, {
           time: '2018/10/25',
          info:'更新保存通道。通道4开通地址127.0.158.123ADT查询端口3360'
        }, {
           time: '2018/10/25',
          info:'更新保存通道。通道4开通地址127.0.158.123ADT查询端口3360'
        }, {
           time: '2018/10/25',
          info:'更新保存通道。通道4开通地址127.0.158.123ADT查询端口3360'
        }, {
           time: '2018/10/25',
          info:'更新保存通道。通道4开通地址127.0.158.123ADT查询端口3360'
        }, {
          time: '2018/10/25',
          info:'更新保存通道。通道4开通地址127.0.158.123ADT查询端口3360'
        }, {
           time: '2018/10/25',
          info:'更新保存通道。通道4开通地址127.0.158.123ADT查询端口3360'
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