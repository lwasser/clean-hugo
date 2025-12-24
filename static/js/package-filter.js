/**
 * Package Filter - AlpineJS component
 * Handles filtering and searching of packages
 */

document.addEventListener('alpine:init', () => {
  Alpine.data('packageFilter', () => ({
    packages: [],
    searchQuery: '',
    activeFilter: '*',

    initPackages(packageData) {
      this.packages = packageData || [];
      console.log('Initialized with packages:', this.packages.length);
    },

    get activePackages() {
      return this.filterPackages(true);
    },

    get archivedPackages() {
      return this.filterPackages(false);
    },

    filterPackages(activeOnly) {
      let filtered = this.packages;

      // Filter by active status first
      filtered = filtered.filter(pkg => pkg.active === activeOnly);

      // Filter by category
      if (this.activeFilter !== '*') {
        filtered = filtered.filter(pkg => {
          return pkg.categories && pkg.categories.some(cat =>
            cat.includes(this.activeFilter) ||
            cat === this.activeFilter.replace(/-/g, '_')
          );
        });
      }

      // Filter by search query
      if (this.searchQuery.trim() !== '') {
        const query = this.searchQuery.toLowerCase();
        filtered = filtered.filter(pkg => {
          const nameMatch = pkg.package_name?.toLowerCase().includes(query);
          const descMatch = pkg.package_description?.toLowerCase().includes(query);
          const maintainerMatch = pkg.all_current_maintainers?.some(m =>
            m.name?.toLowerCase().includes(query) ||
            m.github_username?.toLowerCase().includes(query)
          );
          return nameMatch || descMatch || maintainerMatch;
        });
      }

      return filtered;
    },

    matchesFilter(pkg) {
      // For static rendered cards
      if (this.activeFilter === '*') return true;

      return pkg.categories && pkg.categories.some(cat =>
        cat.includes(this.activeFilter) ||
        cat === this.activeFilter.replace(/-/g, '_')
      );
    },

    matchesSearch(pkg) {
      if (this.searchQuery.trim() === '') return true;

      const query = this.searchQuery.toLowerCase();
      const nameMatch = pkg.package_name?.toLowerCase().includes(query);
      const descMatch = pkg.package_description?.toLowerCase().includes(query);

      return nameMatch || descMatch;
    }
  }));
});
