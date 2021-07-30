<template>
  <v-form
    ref="form"
    v-model="valid"
    lazy-validation
  >
    <v-text-field
      v-model="title"
      :rules="titleRules"
      label="책 제목"
      required
    ></v-text-field>

    <v-text-field
      v-model="author"
      :rules="authorRules"
      label="저자명"
    ></v-text-field>

    <v-text-field
      v-model="price"
      :rules="priceRules"
      label="가격"
    ></v-text-field>

    <v-btn
      color="primary"
      @click="save"
    >
      책 정보 등록
    </v-btn>

  </v-form>
</template>

<script>
  export default {
    data: () => ({
      valid: true,
      title: null,
      titleRules: [
        v => !!v || '책 제목은 반드시 입력해야 합니다.',
      ],
      author: null,
      authorRules: [
        v => !!v || '저자명은 반드시 입력해야 합니다.',
      ],
      price: null,
      priceRules: [
        v => !!v || '가격은 반드시 입력해야 합니다.',
        v => (v > 0) || '가격은 숫자여야 하고 0보다 커야 합니다.',
      ],
    }),

    methods: {
      async save() {
        await this.$refs.form.validate();
        if(this.valid) {
          this.$axios.post('http://localhost:3000/books', {
            title: this.title,
            author: this.author,
            price: Number(this.price)
          })
          .then(res => {
            this.$router.push({ path: "/load" });
          })
          .catch(e => {
            alert('오류 발생!!');
          })
        }
      }
    },
  }
</script>