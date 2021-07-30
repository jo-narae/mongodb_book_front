<template>
  <v-simple-table>
    <template v-slot:default>
      <thead>
        <tr>
          <th class="text-left">제목</th>
          <th class="text-left">저자</th>
          <th class="text-left">가격</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, i) in books" :key="i" @click="moveToDetail(item.id)">
          <td>{{ item.title }}</td>
          <td>{{ item.author }}</td>
          <td>{{ item.price }}</td>
        </tr>
      </tbody>
    </template>
  </v-simple-table>
</template>

<script>
export default {
  data () {
    return {
      books: null
    }
  },
  methods: {
    moveToDetail(id) {
      this.$router.push({ path: `/detail/${id}` });
    }
  },
  created() {
    this.$axios.get('http://localhost:3000/books')
    .then(res => this.books = res.data);
  }
}
</script>

<style scoped>
tr {
  cursor: pointer;
}
</style>