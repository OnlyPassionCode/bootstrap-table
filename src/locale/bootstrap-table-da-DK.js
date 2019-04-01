/**
 * Bootstrap Table danish translation
 * Author: Your Name Jan Borup Coyle, github@coyle.dk
 */
($ => {
  $.fn.bootstrapTable.locales['da-DK'] = {
    formatLoadingMessage () {
      return 'Indlæser, vent venligst'
    },
    formatRecordsPerPage (pageNumber) {
      return `${pageNumber} poster pr side`
    },
    formatShowingRows (pageFrom, pageTo, totalRows, totalNotFiltered) {
      if (totalNotFiltered !== undefined && totalNotFiltered > 0 && totalNotFiltered < totalRows) {
        return `Viser ${pageFrom} til ${pageTo} af ${totalRows} række${(totalRows > 1) ? 'r' : ''} (filtered from ${totalNotFiltered} total entries)`
      }

      return `Viser ${pageFrom} til ${pageTo} af ${totalRows} række${(totalRows > 1) ? 'r' : ''}`
    },
    formatDetailPagination (totalRows) {
      return `Viser ${totalRows} række${(totalRows > 1) ? 'r' : ''}`
    },
    formatSearch () {
      return 'Søg'
    },
    formatNoMatches () {
      return 'Ingen poster fundet'
    },
    formatPaginationSwitch () {
      return 'Skjul/vis nummerering'
    },
    formatRefresh () {
      return 'Opdater'
    },
    formatToggle () {
      return 'Skift'
    },
    formatColumns () {
      return 'Kolonner'
    },
    formatFullscreen () {
      return 'Fullscreen'
    },
    formatAllRows () {
      return 'Alle'
    },
    formatAutoRefresh () {
      return 'Auto Refresh'
    },
    formatExport () {
      return 'Eksporter'
    },
    formatClearFilters () {
      return 'Ryd filtre'
    },
    formatJumpTo () {
      return 'GO'
    },
    formatAdvancedSearch () {
      return 'Advanced search'
    },
    formatAdvancedCloseButton () {
      return 'Close'
    }
  }

  $.extend($.fn.bootstrapTable.defaults, $.fn.bootstrapTable.locales['da-DK'])
})(jQuery)
