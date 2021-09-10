<template>
  <div class="filter-wrapper">
    <p>Find course</p>
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
  p {
    margin: 0.5rem 0;
  }

  .filter-option {
    margin-right: 1rem;
  }

  .filter-option label,
  .filter-option input {
    vertical-align: middle;
  }

  .filter-option label {
    margin-left: 0.25rem;
  }

  .filter-option.active label {
    font-weight: bold;
  }

</style>
