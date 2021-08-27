<template>
  <div class="found-list">
    <found-list-item
      v-for="item in foundList"
      :foundListItem="item"
      :key="item.feed_base_info.feed_id"
    ></found-list-item>
  </div>
</template>

<script>
import FoundListItem from "./FoundListItem";
export default {
  name: "foundList",
  props: ["foundList"],
  data() {
    return {};
  },
  components: {
    FoundListItem
  },
  methods: {},
  mounted() {}
};
</script>

<style lang='less' scoped>
.found-list {
  display: flex;
  flex-direction: column;
}
</style>