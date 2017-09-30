$(document).ready(function () {
	// EVENT HANDLING
	// -------------------------------------------------------------- //
  let vWraps = document.getElementsByClassName('vid-wrap')
  document.getElementById('list').addEventListener('click', function (e) {
    if (e.target && e.target.nodeName === 'BUTTON') {
      let watchedBtn = $(e.target).hasClass('watched-btn')
      let activeBtn = $(e.target).hasClass('active-btn')
      if (watchedBtn && !activeBtn) {
        watchedBtnListener(e)
      } else if (!watchedBtn && activeBtn) {
        activeBtnListener(e)
      }
    }
  })
	// AJAX STUFF
  function activeBtnListener (e) {
    let idx = parseInt(e.target.getAttribute('data-index'))
    $.ajax({
      url: 'http://localhost:1337/api/<%= channel %>/active/' + idx,
      dataType: 'jsonp',
      context: document.body
    }).done((res) => (res.status === 200) ? activeDOMSwitch(e) : alert('ERROR: Refresh Page'))
  }
  function watchedBtnListener (e) {
    let idx = parseInt(e.target.getAttribute('data-index'))
    $.ajax({
      url: 'http://localhost:1337/api/<%= channel %>/watched/' + idx,
      dataType: 'jsonp',
      context: document.body
    }).done((res) => (res.status === 200) ? watchedDOMSwitch(e) : alert('ERROR: Refresh Page'))
  }
	// Active DOM manipulation stuff
  function activeDOMSwitch (e) {
    let selected = vWraps[e.target.getAttribute('data-index')]
    if ($(selected).hasClass('active') && !$(selected).hasClass('empty')) {
      $(selected).removeClass('active')
      $(e.target).removeClass('active-btn-true').addClass('active-btn-false').html('false')
    } else if (!$(selected).hasClass('active') && !$(selected).hasClass('empty')) {
      $(selected).addClass('active')
      $(e.target).removeClass('active-btn-false').addClass('active-btn-true').html('true')
    } else if (!$(selected).hasClass('active') && $(selected).hasClass('empty')) {
      $(selected).removeClass('empty').addClass('active')
      $(e.target).removeClass('active-btn-false').addClass('active-btn-true').html('true')
    }
  }
	// Watched DOM manipulation stuff
  function watchedDOMSwitch (e) {
    if ($(e.target).hasClass('watched-btn-true')) {
      $(e.target).removeClass('watched-btn-true').addClass('watched-btn-false').html('false')
    } else if ($(e.target).hasClass('watched-btn-false')) {
      $(e.target).removeClass('watched-btn-false').addClass('watched-btn-true').html('true')
    }
  }
})
