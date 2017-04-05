var ws = {};


// =================================================================================
// On Load
// =================================================================================
$(document).on('ready', function() {
	connect_to_server();
	$('input[name="ac_id"]').val('r' + randStr(6));
	
	// =================================================================================
	// jQuery UI Events
	// =================================================================================
	$('#submit').click(function(){
		var obj = 	{
						type: 'create_account',
						ac_id: $('input[name="ac_id"]').val().replace(' ', ''),
						ac_short_name: $('input[name="ac_short_name"]').val(),
						status: $('input[name="status"]').val(),
						term_date: $('select[name="term_date"]').val(),
						inception_date: $('select[name="inception_date"]').val(),
						ac_region: $('select[name="ac_region"]').val(),
						ac_sub_region: $('select[name="ac_sub_region"]').val(),
						cod_country_domicile: $('select[name="cod_country_domicile"]').val(),
						liq_method: $('select[name="liq_method"]').val(),
						contracting_entity: $('select[name="contract_entity"]').val(),
						mgn_entity: $('select[name="mgn_entity"]').val(),
						ac_legal_name: $('select[name="ac_legal_name"]').val(),
						manager_name: $('select[name="manager_name"]').val(),
						cod_ccy_base: $('select[name="cod_ccy_base"]').val(),
						long_name: $('select[name="long_name"]').val(),
						mandate_id: $('select[name="mandate_id"]').val(),
						client_id: $('select[name="client_id"]').val(),
						custodian_name: $('select[name="custodian_name"]').val(),
						sub_mandate_id: $('select[name="sub_mandate_id"]').val(),
						transfer_agent_name: $('select[name="transfer_agent_name"]').val(),
						trust_bank: $('select[name="trust_bank"]').val(),
						re_trust_bank: $('select[name="re_trust_bank"]').val(),
						last_updated_by: $('select[name="last_updated_by"]').val(),
						last_approved_by: $('select[name="last_approved_by"]').val(),
						last_update_date: $('select[name="last_update_date"]').val()
					};
					
		if(obj.ac_id){
			console.log('creating user, sending', obj);
			ws.send(JSON.stringify(obj));
			showHomePanel();
			$('#user1wrap').append("<p>account:"+obj.ac_id+" [short name]:"+obj.ac_short_name+"</p>");					        		
		}
		return false;
	});
	
		$('#submit2').click(function(){
		var obj = 	{
						type: 'ac_trade_setup',
						ac_id: $('input[name="t_ac_id"]').val().replace(' ', ''),
						lvts: $('input[name="lvts"]').val(),
						calypso: $('input[name="calypso"]').val(),
						aladdin: $('select[name="aladdin"]').val(),
						trade_start_date: $('select[name="t_start_date"]').val(),
						equity: $('select[name="equity"]').val(),
						fixed_income: $('select[name="fixed_income"]').val()
					};
					
		if(obj.ac_id){
			console.log('creating user, sending', obj);
			ws.send(JSON.stringify(obj));
			showHomePanel();
			$('#user1wrap').append("<p>account trades:"+obj.ac_id+" [lvts]:"+obj.lvts+"</p>");					 		
		}
		return false;
	});
	
	$('#submit3').click(function(){
		var obj = 	{
						type: 'ac_benchmark',
						ac_id: $('input[name="ben_ac_id"]').val().replace(' ', ''),
						benchmark_id: $('input[name="aben_id"]').val(),
						source: $('input[name="aben_source"]').val(),
						name: $('select[name="aben_name"]').val(),
						currency: $('select[name="aben_currency"]').val(),
						primary_flag: $('select[name="aben_pri_flag"]').val(),
						start_date: $('select[name="aben_startdate"]').val(),
						end_date: $('select[name="aben_enddate"]').val(),
						benchmark_reference_id: $('select[name="aben_ref_id"]').val(),
						benchmark_reference_id_source: $('select[name="aben_ref_id_src"]').val()
					};
					
		if(obj.ac_id){
			console.log('creating user, sending', obj);
			ws.send(JSON.stringify(obj));
			showHomePanel();
			$('#user1wrap').append("<p>account benchmarks:"+obj.ac_id+" [benchmark_id]:"+obj.benchmark_id+"</p>");		
		}
		return false;
	});
	
	$('#submit4').click(function(){
		var obj = 	{
						type: 'benchmarks',
						benchmark_id: $('input[name="benchmark_id"]').val().replace(' ', ''),
						id_source: $('input[name="ben_id_src"]').val(),
						name: $('input[name="ben_name"]').val(),
						currency: $('select[name="ben_currency"]').val(),
						benchmark_reference_id: $('select[name="ben_ref_id"]').val(),
						benchmark_reference_id_source: $('select[name="ben_ref_id_src"]').val()
					};
					
		if(obj.ac_id){
			console.log('creating user, sending', obj);
			ws.send(JSON.stringify(obj));
			showHomePanel();
			$('#user1wrap').append("<p>benchmarks:"+obj.benchmark_id+" [name]:"+obj.name+"</p>");		
		}
		return false;
	});
	
	$('#homeLink').click(function(){
		showHomePanel();
	});

	$('#createLink').click(function(){
		$('input[name="ac_id"]').val('r' + randStr(6));
	});

	
	
	//drag and drop marble
	$('#user1wrap, #trashbin').sortable({connectWith: '.sortable'}).disableSelection();
	
	
	$('#user1wrap').droppable({drop:
		function( event, ui ) {
		}
	});
	
	$('#trashbin').droppable({drop:
		function( event, ui ) {
			var id = $(ui.draggable).attr('id');
			if(id){
				console.log('removing user', id);
				var obj = 	{
								type: 'remove',
								name: id,
								v: 1
							};
				ws.send(JSON.stringify(obj));
				$(ui.draggable).fadeOut();
				setTimeout(function(){
					$(ui.draggable).remove();
				}, 300);
				showHomePanel();
			}
		}
	});
	
	
	// =================================================================================
	// Helper Fun
	// ================================================================================
	//show admin panel page
	function showHomePanel(){
		$('#homePanel').fadeIn(300);
		$('#createPanel').hide();
		
		var part = window.location.pathname.substring(0,3);
		window.history.pushState({},'', part + '/home');						//put it in url so we can f5
		
		console.log('getting new users');
		setTimeout(function(){
			//$('#user1wrap').html('');											//reset the panel
			ws.send(JSON.stringify({type: 'get', v: 1}));						//need to wait a bit
			ws.send(JSON.stringify({type: 'chainstats', v: 1}));
			
		}, 1000);
	}
	
	
});


// =================================================================================
// Socket Stuff
// =================================================================================
function connect_to_server(){
	var connected = false;
	connect();
	
	function connect(){
		var wsUri = 'ws://' + document.location.hostname + ':' + document.location.port;
		console.log('Connectiong to websocket', wsUri);
		
		ws = new WebSocket(wsUri);
		ws.onopen = function(evt) { onOpen(evt); };
		ws.onclose = function(evt) { onClose(evt); };
		ws.onmessage = function(evt) { onMessage(evt); };
		ws.onerror = function(evt) { onError(evt); };
	}
	
	function onOpen(evt){
		console.log('WS CONNECTED');
		connected = true;
		clear_blocks();
		$('#errorNotificationPanel').fadeOut();
		ws.send(JSON.stringify({type: 'get', v:1}));
		ws.send(JSON.stringify({type: 'chainstats', v:1}));
	}

	function onClose(evt){
		console.log('WS DISCONNECTED', evt);
		connected = false;
		setTimeout(function(){ connect(); }, 5000);					//try again one more time, server restarts are quick
	}

	function onMessage(msg){
		try{
			
			var msgObj = JSON.parse(msg.data);
			if(msgObj.marble){
				console.log('rec', msgObj.msg, msgObj);
			}
			else if(msgObj.msg === 'chainstats'){
			
				console.log('rec', msgObj.msg, ': ledger blockheight', msgObj.chainstats.height, 'block', msgObj.blockstats.height);
				var e = formatDate(msgObj.blockstats.transactions[0].timestamp.seconds * 1000, '%M/%d/%Y &nbsp;%I:%m%P');
		
				$('#blockdate').html('<span style="color:#fff">TIME</span>&nbsp;&nbsp;' + e + ' UTC');
				var temp =  {
								id: msgObj.blockstats.height, 
								blockstats: msgObj.blockstats
							};
				new_block(temp);								//send to blockchain.js
			}
			else console.log('rec', msgObj.msg, msgObj);
		}
		catch(e){
			console.log('ERROR', e);
		}
	}

	function onError(evt){
		console.log('ERROR ', evt);
		if(!connected && bag.e == null){											//don't overwrite an error message
			$('#errorName').html('Warning');
			$('#errorNoticeText').html('Waiting on the node server to open up so we can talk to the blockchain. ');
			$('#errorNoticeText').append('This app is likely still starting up. ');
			$('#errorNoticeText').append('Check the server logs if this message does not go away in 1 minute. ');
			$('#errorNotificationPanel').fadeIn();
		}
	}
}


