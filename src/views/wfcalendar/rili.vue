<template>
  <div class="rili">
    <div class="main">
      <div class="top">
        <el-icon class="icon" @click="yeartoleft"><DArrowLeft /></el-icon>
        <el-icon class="icon" @click="monthtoleft"><ArrowLeft /></el-icon>
        <div style="width: 40%; font-size: 14px">
          {{ dateData.thisyear }}年
          {{
            dateData.thismonth < 10
              ? "0" + dateData.thismonth
              : dateData.thismonth
          }}月
        </div>
        <el-icon class="icon" @click="monthtoright"><ArrowRight /></el-icon
        ><el-icon class="icon" @click="yeartoright"><DArrowRight /></el-icon>
      </div>
      <div class="weekList">
        <div
          v-for="(item, index) in dateData.week"
          :key="index"
          class="weekItem"
        >
          <span>{{ item }}</span>
        </div>
      </div>
      <div class="dayList">
        <div
          v-for="(item, index) in dateData.daylist"
          :key="index"
          @click="checkday(item.day, item.ismonth)"
          class="dayItem"
          :class="returnClass(item)"
        >
          <div v-if="item.start == true" class="startItem">
            {{ item.day }}
          </div>
          <div v-if="item.end == true" class="endItem">
            {{ item.day }}
          </div>
          <div
            v-if="item.start == false && item.end == false"
            :class="
              item.day == dateData.today &&
              dateData.thisyear == dateData.year &&
              dateData.thismonth == dateData.month
                ? 'todayItem'
                : 'dayItem'
            "
          >
            {{ item.day }}
          </div>
        </div>
      </div>
      <el-divider style="margin: 10px 0"></el-divider>
      <div class="timeList">
        <div class="name">开始时间</div>
        <div class="time">
          <select v-model="dateData.startHour">
            <option v-for="item in dateData.hourList" :value="item">
              {{ item }}
            </option>
          </select>
          <div style="font-weight: bold; font-size: 16px; margin: 0 4px">:</div>
          <select v-model="dateData.startMin">
            <option v-for="item in dateData.minList" :value="item">
              {{ item }}
            </option>
          </select>
        </div>
      </div>
      <div class="timeList">
        <div class="name">结束时间</div>
        <div class="time">
          <select v-model="dateData.endHour">
            <option v-for="item in dateData.hourList" :value="item">
              {{ item }}
            </option>
          </select>
          <div style="font-weight: bold; font-size: 16px; margin: 0 4px">:</div>
          <select v-model="dateData.endMin">
            <option v-for="item in dateData.minList" :value="item">
              {{ item }}
            </option>
          </select>
        </div>
      </div>
    </div>
    <div>
      开始
      {{
        String(dateData.startYear) +
        String(dateData.startMonth) +
        String(dateData.startDay)
      }}
      结束{{
        String(dateData.endYear) +
        String(dateData.endMonth) +
        String(dateData.endDay)
      }}
      点击{{
        String(dateData.clickYear) +
        String(dateData.clickMonth) +
        String(dateData.clickDay)
      }}
    </div>
  </div>
</template>

<script setup>
import { ref, reactive, computed, watch } from "vue";
const dateData = reactive({
  myDate: new Date(),
  week: ["S", "M", "T", "W", "T", "F", "S"],
  hourList: [
    "00",
    "01",
    "02",
    "03",
    "04",
    "05",
    "06",
    "07",
    "08",
    "09",
    "10",
    "11",
    "12",
    "13",
    "14",
    "15",
    "16",
    "17",
    "18",
    "19",
    "20",
    "21",
    "22",
    "23",
  ],
  minList: [
    "00",
    "01",
    "02",
    "03",
    "04",
    "05",
    "06",
    "07",
    "08",
    "09",
    "10",
    "11",
    "12",
    "13",
    "14",
    "15",
    "16",
    "17",
    "18",
    "19",
    "20",
    "21",
    "22",
    "23",
    "24",
    "25",
    "26",
    "27",
    "28",
    "29",
    "30",
    "31",
    "32",
    "33",
    "34",
    "35",
    "36",
    "37",
    "38",
    "39",
    "40",
    "41",
    "42",
    "43",
    "44",
    "45",
    "46",
    "47",
    "48",
    "49",
    "50",
    "51",
    "52",
    "53",
    "54",
    "55",
    "56",
    "57",
    "58",
    "59",
  ],
  startDay: null,
  startYear: null,
  startMonth: null,
  endDay: null,
  endYear: null,
  endMonth: null,
  daylist: [],
  thisyear: "",
  thismonth: "",
  today: "",
  weekday: "",
  year: "",
  month: "",
  day: "",
  weeks: "",
  startHour: "",
  startMin: "",
  endHour: "",
  endMin: "",
  clickYear: "",
  clickMonth: "",
  clickDay: "",
});
const getInfo = () => {
  dateData.year = dateData.thisyear = dateData.myDate.getFullYear();
  dateData.month = dateData.thismonth = dateData.myDate.getMonth() + 1;
  dateData.day = dateData.today = dateData.myDate.getDate();
  dateData.weeks = dateData.weekday = dateData.myDate.getDay();
  dateData.startHour = dateData.endHour =
    dateData.myDate.getHours() > 9
      ? String(dateData.myDate.getHours())
      : "0" + dateData.myDate.getHours();
  dateData.startMin = dateData.endMin =
    dateData.myDate.getMinutes() > 9
      ? String(dateData.myDate.getMinutes())
      : "0" + dateData.myDate.getMinutes();
  console.log(typeof dateData.myDate.getMinutes());
  getcalendar();
};

const getcalendar = () => {
  let daysnumber = new Date(dateData.thisyear, dateData.thismonth, 0).getDate();
  let beginweeks = new Date(
    dateData.thisyear,
    dateData.thismonth - 1,
    1
  ).getDay();
  let list = [];
  let mos = "";
  if (dateData.thismonth == 1) {
    mos = new Date(dateData.thisyear, 11, 0).getDate();
  } else {
    mos = new Date(dateData.thisyear, dateData.thismonth - 1, 0).getDate();
  }
  for (let i = beginweeks; i > 0; i--) {
    let arr = {
      day: "",
      ismonth: "0",
      centerDay: false,
      start: false,
      end: false,
    };
    list.push(arr);
  }
  dateData.daylist = list.reverse();
  for (let j = 1; j <= daysnumber; j++) {
    let arr = {
      day: j,
      ismonth: "1",
      centerDay: false,
      start: false,
      end: false,
    };
    dateData.daylist.push(arr);
  }
  let endweeks = new Date(
    dateData.thisyear,
    dateData.thismonth - 1,
    daysnumber
  ).getDay();
  for (let m = 1; m < 7 - endweeks; m++) {
    let arr = {
      day: "",
      ismonth: "0",
      centerDay: false,
      start: false,
      end: false,
    };
    dateData.daylist.push(arr);
  }
};
getInfo();
watch(
  () => dateData.daylist,
  (newValue, oldValue) => {
    dateData.daylist.forEach((item, index) => {
      let nowday = item.day > 9 ? item.day : "0" + item.day;
      let nowmonth =
        dateData.thismonth > 9 ? dateData.thismonth : "0" + dateData.thismonth;
      let starttime =
        String(dateData.startYear) +
        String(dateData.startMonth) +
        String(dateData.startDay);
      let endtime =
        String(dateData.endYear) +
        String(dateData.endMonth) +
        String(dateData.endDay);
      let nowtime =
        String(dateData.thisyear) + String(nowmonth) + String(nowday);
      if (dateData.startDay && !dateData.endDay) {
        console.log("进入1");
        if (starttime == nowtime) {
          item.centerDay = true;
          item.start = true;
        } else {
          item.centerDay = false;
          item.start = false;
          item.end = false;
        }
      }
      if (dateData.startDay && dateData.endDay) {
        console.log("进入2", starttime, nowtime, endtime);
        if (starttime <= nowtime && nowtime <= endtime) {
          item.centerDay = true;
        } else {
          item.centerDay = false;
        }
        if (starttime == nowtime) {
          item.start = true;
        } else {
          item.start = false;
        }
        if (endtime == nowtime) {
          item.end = true;
        } else {
          item.end = false;
        }
      }
      if (item.day == "") {
        item.centerDay = false;
      }
    });
  },
  { immediate: true, deep: true }
);
watch(
  () => dateData.startDay,
  (newValue, oldValue) => {
    dateData.daylist.forEach((item, index) => {
      let nowday = item.day > 9 ? item.day : "0" + item.day;
      let nowmonth =
        dateData.thismonth > 9 ? dateData.thismonth : "0" + dateData.thismonth;
      let starttime =
        String(dateData.startYear) +
        String(dateData.startMonth) +
        String(dateData.startDay);
      let endtime =
        String(dateData.endYear) +
        String(dateData.endMonth) +
        String(dateData.endDay);
      let nowtime =
        String(dateData.thisyear) + String(nowmonth) + String(nowday);
      if (dateData.startDay && !dateData.endDay) {
        console.log("进入1");
        if (starttime == nowtime) {
          item.centerDay = true;
          item.start = true;
        } else {
          item.centerDay = false;
          item.start = false;
          item.end = false;
        }
      }
      if (dateData.startDay && dateData.endDay) {
        console.log("进入2", starttime, nowtime, endtime);
        if (starttime <= nowtime && nowtime <= endtime) {
          item.centerDay = true;
        } else {
          item.centerDay = false;
        }
        if (starttime == nowtime) {
          item.start = true;
        } else {
          item.start = false;
        }
        if (endtime == nowtime) {
          item.end = true;
        } else {
          item.end = false;
        }
      }
      if (item.day == "") {
        item.centerDay = false;
      }
    });
  },
  { immediate: true, deep: true }
);
watch(
  () => dateData.endDay,
  (newValue, oldValue) => {
    dateData.daylist.forEach((item, index) => {
      let nowday = item.day > 9 ? item.day : "0" + item.day;
      let nowmonth =
        dateData.thismonth > 9 ? dateData.thismonth : "0" + dateData.thismonth;
      let starttime =
        String(dateData.startYear) +
        String(dateData.startMonth) +
        String(dateData.startDay);
      let endtime =
        String(dateData.endYear) +
        String(dateData.endMonth) +
        String(dateData.endDay);
      let nowtime =
        String(dateData.thisyear) + String(nowmonth) + String(nowday);
      if (dateData.startDay && !dateData.endDay) {
        console.log("进入1");
        if (starttime == nowtime) {
          item.centerDay = true;
          item.start = true;
        } else {
          item.centerDay = false;
          item.start = false;
          item.end = false;
        }
      }
      if (dateData.startDay && dateData.endDay) {
        console.log("进入2", starttime, nowtime, endtime);
        if (starttime <= nowtime && nowtime <= endtime) {
          item.centerDay = true;
        } else {
          item.centerDay = false;
        }
        if (starttime == nowtime) {
          item.start = true;
        } else {
          item.start = false;
        }
        if (endtime == nowtime) {
          item.end = true;
        } else {
          item.end = false;
        }
        console.log(item.end);
      }
      if (item.day == "") {
        item.centerDay = false;
      }
    });
  },
  { immediate: true, deep: true }
);

const monthtoleft = () => {
  if (dateData.thismonth > 1) {
    dateData.thismonth = dateData.thismonth - 1;
  } else {
    dateData.thismonth = 12;
    dateData.thisyear = dateData.thisyear - 1;
  }
  getcalendar();
};

const monthtoright = () => {
  if (dateData.thismonth < 12) {
    dateData.thismonth = dateData.thismonth + 1;
  } else {
    dateData.thismonth = 1;
    dateData.thisyear = dateData.thisyear + 1;
  }
  getcalendar();
};

const yeartoleft = () => {
  dateData.thisyear = dateData.thisyear - 1;
  getcalendar();
};

const yeartoright = () => {
  dateData.thisyear = dateData.thisyear + 1;
  getcalendar();
};

const checkday = (days, ismonth) => {
  let month =
    dateData.thismonth > 9 ? dateData.thismonth : "0" + dateData.thismonth;
  let day = days > 9 ? days : "0" + days;
  if (ismonth == 1) {
    if (dateData.startDay) {
      if (dateData.endDay) {
        let clickTime = String(dateData.thisyear) + String(month) + String(day);
        let clickLastTime =
          String(dateData.clickYear) +
          String(dateData.clickMonth) +
          String(dateData.clickDay);
        if (clickTime > clickLastTime) {
          dateData.startDay = dateData.clickDay;
          dateData.startYear = dateData.clickYear;
          dateData.startMonth = dateData.clickMonth;
          dateData.endDay = day;
          dateData.endYear = dateData.thisyear;
          dateData.endMonth = month;
          dateData.clickYear = dateData.thisyear;
          dateData.clickMonth = month;
          dateData.clickDay = day;
        } else if (clickTime < clickLastTime) {
          dateData.endDay = dateData.startDay;
          dateData.endYear = dateData.startYear;
          dateData.endMonth = dateData.startMonth;
          dateData.startDay = day;
          dateData.startYear = dateData.thisyear;
          dateData.startMonth = month;
          dateData.clickYear = dateData.thisyear;
          dateData.clickMonth = month;
          dateData.clickDay = day;
        }
      } else {
        let startTime1 =
          String(dateData.startYear) +
          String(dateData.startMonth) +
          String(dateData.startDay);
        let clickTime1 =
          String(dateData.thisyear) + String(dateData.thismonth) + String(day);
        if (clickTime1 > startTime1) {
          dateData.endDay = day;
          dateData.endYear = dateData.thisyear;
          dateData.endMonth = month;
          dateData.clickYear = dateData.thisyear;
          dateData.clickMonth = month;
          dateData.clickDay = day;
        } else {
          dateData.endDay = dateData.startDay;
          dateData.endYear = dateData.startYear;
          dateData.endMonth = dateData.startMonth;
          dateData.startDay = day;
          dateData.startYear = dateData.thisyear;
          dateData.startMonth = month;
          dateData.clickYear = dateData.thisyear;
          dateData.clickMonth = month;
          dateData.clickDay = day;
        }
      }
    } else {
      dateData.startDay = day;
      dateData.startYear = dateData.thisyear;
      dateData.startMonth = month;
      dateData.clickYear = dateData.thisyear;
      dateData.clickMonth = month;
      dateData.clickDay = day;
    }
  }
};
const returnClass = (item) => {
  if (item.centerDay && item.start == false && item.end == false) {
    return "centerTime";
  } else if (item.start) {
    return "startTime";
  } else if (item.end) {
    return "endTime";
  }
};
</script>
<style lang="scss" scoped>
.rili {
  display: flex;
  justify-content: center;
  width: 100%;
  height: 800px;
  align-items: center;
  .main {
    height: 350px;
    width: 224px;
    background-color: #fff;
    padding: 12px;
    .top {
      font-size: 14px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      height: 30px;
      padding: 0 8px;
      .icon {
        cursor: pointer;
      }
    }
    .weekList {
      margin-top: 10px;
      height: 30px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      //   padding: 0 8px;
      color: #ccc;
      .weekItem {
        width: 32px;
        // background-color: green;
      }
    }
    .dayList {
      margin-top: 8px;
      //   height: 30px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      //   padding: 0 8px;
      //   color: #ccc;
      flex-wrap: wrap;
      .centerTime {
        background-color: #f5effa;
      }
      .startTime {
        background: linear-gradient(
          to right,
          #fff 0%,
          #f5effa 50%,
          #f5effa 100%
        );
      }
      .endTime {
        background: linear-gradient(
          to left,
          #fff 0%,
          #f5effa 50%,
          #f5effa 100%
        );
      }
      .dayItem {
        width: 32px;
        height: 30px;
        text-align: center;
        line-height: 30px;
        cursor: pointer;
        // background-color: green;
      }
      .startItem {
        width: 28px;
        height: 28px;
        text-align: center;
        line-height: 28px;
        border-radius: 50%;
        background-color: purple;
        color: #fff;
      }
      .endItem {
        width: 28px;
        height: 28px;
        text-align: center;
        line-height: 28px;
        border-radius: 50%;
        background-color: purple;
        color: #fff;
      }
      .todayItem {
        width: 28px;
        height: 28px;
        text-align: center;
        line-height: 28px;
        border-radius: 50%;
        border: 1px solid purple;
      }
    }
    .timeList {
      height: 40px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      .name {
        font-size: 12px;
        font-weight: bold;
      }
      .time {
        display: flex;
        align-items: center;
      }
      select {
        width: 24px;
        height: 24px;
        text-align: center;
        -webkit-appearance: none;
        -moz-appearance: none;
        -ms-appearance: none;
        appearance: none;
        border: 0px;
        background-color: #eeeeee;
        font-size: 16px;
      }
      /* --ie清除--*/
      select::-ms-expand {
        display: none;
      }
      option {
        background-color: #fff;
      }
    }
  }
}
</style>
