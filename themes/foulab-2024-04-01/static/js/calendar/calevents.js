// Load code from flat .ics file, and display in fullCalendar

( function($) {

    $(document).ready(function() {

	ics_sources = [
	    {url:'../ical/foulab.ics'}
	]

	var toolbox = {
	    data_req : function(url, callback) {
		req = new XMLHttpRequest()
		req.addEventListener('load', callback)
		req.open('GET', url)
		req.send()
	    },

	    load_ics : function(ics){
		this.data_req(ics.url, function(){
		    $("#calendar").fullCalendar('addEventSource', fc_events(this.response, ics.event_properties))
		    sources_to_load_cnt -= 1
		})
	    },
	    
	    add_recur_events : function() {
		if (sources_to_load_cnt < 1) {
		    $('#calendar').fullCalendar('addEventSource', expand_recur_events)
		} else {
		    setTimeout(this.add_recur_events, 500)
		}
	    }
	}

	$("#calendar").fullCalendar({
            header: {
		left: 'prev,next today',
		center: 'title',
		right: 'month,agendaWeek,agendaDay'
            },
	    navLinks: true,
            defaultView: 'month',
	    height: 'auto',

	    eventMouseover: function (data, event, view) {

		tooltip = '<div class="tooltiptopicevent" style="width:auto;height:auto;background:#800000;position:absolute;z-index:10001;padding:10px 10px 10px 10px;font-weight:bolder;border-radius:5px;">' + data.title + '</div>';


		$("body").append(tooltip);
		$(this).mouseover(function (e) {
                    $(this).css('z-index', 10000);
                    $('.tooltiptopicevent').fadeIn('500');
                    $('.tooltiptopicevent').fadeTo('10', 1.9);
		}).mousemove(function (e) {
                    $('.tooltiptopicevent').css('top', e.pageY + 10);
                    $('.tooltiptopicevent').css('left', e.pageX + 20);
		});


            },

            eventMouseout: function (data, event, view) {
		$(this).css('z-index', 8);

		$('.tooltiptopicevent').remove();

            }
	})

	sources_to_load_cnt = ics_sources.length
	for (ics of ics_sources) {
            toolbox.load_ics(ics)
	}
	toolbox.add_recur_events()

    });
} ) (jQuery);

