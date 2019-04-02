<template>
<div class="container" :class="{loadingItem: isProductLoading}">
  <div class="row text-center" v-if="isProductLoading">
    <grid-loader :loading="isProductLoading" :color="loaderColor" :size="loaderSize"></grid-loader>
  </div>
  <div v-else class="row action-panel">
    <div class="col-xs-12">
      <div class="btn-group pull-right">
				<a id="list" class="btn btn-default btn-sm" @click.prevent="changeDisplay(true)">
					<span class="glyphicon glyphicon-th-list"></span>List
				</a>
				<a id="grid" class="btn btn-default btn-sm" @click.prevent="changeDisplay(false)">
					<span class="glyphicon glyphicon-th"></span>Grid
				</a>
      </div>

      <router-link to="/cart" class="btn btn-success navbar-btn" tag="button">
          Checkout <span class="badge">{{ numItems }} ($ {{ cartValue }})</span>
        </router-link>
    </div>
  </div>

  <div class="is-flex" v-if="!isProductLoading">
    <app-product-item v-for="prod in products" :item="prod" :key="prod.id" :displayList="displayList"></app-product-item>
  </div>

</div>
</template>



<script>
import { mapGetters, mapActions } from 'vuex'
import ProductItem from '../../components/Modules/ShoppingCart/ProductItem.vue';
import GridLoader from 'vue-spinner/src/GridLoader.vue';

export default {
  data() {
    return {
      loaderColor: "#5cb85c",
      loaderSize: "50px",
      displayList: false
    }
  },
  computed: {
    ...mapGetters(['products', 'isProductLoading', 'cartItemList', 'cartValue']),
    numItems() {
      return this.cartItemList.reduce((total, item) => {
        total += item.quantity;
        return total
      }, 0);
   },
   
  },

  components: {
    appProductItem: ProductItem,
    GridLoader
  },
  methods: {
    changeDisplay(isList) {
      this.displayList = isList;
    }
  }
}
</script>

