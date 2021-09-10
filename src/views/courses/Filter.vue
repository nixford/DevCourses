<template>
  <div class="filter-wrapper">
    <p>Find course</p>
    <div class="options-div">
      <span class="filter-options">
        <label for="frontend">Frontend</label>
        <input 
          type="checkbox" 
          id="frontend" 
          checked
          @change="setFilters"
        >
      </span>
      <span class="filter-options">
        <label for="backend">Backend</label>
        <input 
          type="checkbox" 
          id="backend" 
          checked
          @change="setFilters"
        >
      </span>
      <span class="filter-options">
        <label for="cloud">Cloud</label>
        <input 
          type="checkbox" 
          id="cloud" 
          checked
          @change="setFilters"
        >
      </span>
    </div>    
  </div>  
</template>

<script>
export default {
  emits: ['change-filters'],
  data() {
    return {
      filters: {
        frontend: true,
        backend: true,
        cloud: true,
      }
    }
  },
  methods: {
    setFilters(event) {
      const inputId = event.target.id;
      const isActive = event.target.checked;
      const updatedFilters = {
        ...this.filters,
        [inputId]: isActive,
      }
      this.filters = updatedFilters;
      this.$emit('change-filters', updatedFilters);
    }
  }
}
</script>

<style scoped>
  .filter-wrapper {
    width: 30%;
    height: 150px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color:aliceblue;
    border-radius: 64px;
    margin-top: 1%;
  }

  .options-div {
    display: flex;
    justify-content: center;
    flex-direction: row;
  }

  p {
    margin: 0.5rem 0;
  }

  .filter-options {
    margin-right: 12px;
  }

</style>
