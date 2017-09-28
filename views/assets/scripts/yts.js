// $(document).ready(function() {
// 	let vWraps, aBtns, wBtns, cBtns, idx, selected;
// 		vWraps = document.getElementsByClassName('vid-wrap');
// 		aBtns = document.getElementsByClassName('active-btn');
// 		wBtns = document.getElementsByClassName('watched-btn');
// 		cBtns = document.getElementsByClassName('check-btn');

// 	for (var i = 0; i < aBtns.length; i++) { // console.log(aBtns[i]);
// 		aBtns[i].addEventListener('click', activeBtnListener, false);
// 	}

// 	for (var i = 0; i < wBtns.length; i++) { // console.log(wBtns[i]);
// 		wBtns[i].addEventListener('click', watchedBtnListener, false);
// 	}

// 	for (var i = 0; i < cBtns.length; i++) { // console.log(cBtns[i]);
// 		cBtns[i].addEventListener('click', bothBtnListener, false);
// 	}

// 	function activeBtnListener(e) {
// 		idx = parseInt(e.target.getAttribute('data-index'));

// 		$.ajax({
// 			url: "http://localhost:3000/yts/<%= channel %>/active/"+idx,
// 			context: document.body
// 		}).done(() => activeDOMSwitch(e));
// 	}

// 	function watchedBtnListener(e) {
// 		idx = parseInt(e.target.getAttribute('data-index'));

// 		$.ajax({
// 			url: "http://localhost:3000/yts/<%= channel %>/watched/"+idx,
// 			context: document.body
// 		}).done(() => watchedDOMSwitch(e));
// 	}

// 	function bothBtnListener(e) {
// 		idx = parseInt(e.target.getAttribute('data-index'));

// 		$.ajax({
// 			url: "http://localhost:3000/yts/<%= channel %>/check/"+idx,
// 			context: document.body
// 		}).done(() => {
// 			activeDOMSwitch(e);
// 			watchedDOMSwitch(e);
// 		});
// 	}

// 	// Active DOM manipulation stuff
// 	function activeDOMSwitch(e) {

// 		selected = vWraps[e.target.getAttribute('data-index')];

// 		if ($(selected).hasClass('active') && !$(selected).hasClass('empty')) {
// 			$(selected).removeClass('active')
// 			$(e.target).removeClass('active-btn-true').addClass('active-btn-false').html("false");
// 		} else if (!$(selected).hasClass('active') && !$(selected).hasClass('empty')) {
// 			$(selected).addClass('active')
// 			$(e.target).removeClass('active-btn-false').addClass('active-btn-true').html("true");
// 		} else if (!$(selected).hasClass('active') && $(selected).hasClass('empty')) {
// 			$(selected).removeClass('empty').addClass('active')
// 			$(e.target).removeClass('active-btn-false').addClass('active-btn-true').html("true");

// 			// TODO: Append iframe to DOM and load video

// 		}

// 	}

// 	// Watched DOM manipulation stuff
// 	function watchedDOMSwitch(e) {

// 		if ($(e.target).hasClass('watched-btn-true')) {
// 			$(e.target).removeClass('watched-btn-true').addClass('watched-btn-false').html("false")
// 		} else if ($(e.target).hasClass('watched-btn-false')) {
// 			$(e.target).removeClass('watched-btn-false').addClass('watched-btn-true').html("true")
// 		}

// 	}

// })
