var ws = {};
var tmp_account="";
var tmp_actrade="";
var tmp_acbench="";
var tmp_bench="";

// =================================================================================
// On Load
// =================================================================================
$(document).on('ready', function() {
	connect_to_server();
	// =================================================================================
	// jQuery UI Events
	// =================================================================================
	$('#submit').click(function(){
		var obj = 	{
						type: 'create_account',
						ac_id: $('input[name="ac_id"]').val().replace(' ', ''),
						ac_short_name: $('input[name="ac_short_name"]').val(),
						ac_status: $('input[name="status"]').val(),
						term_date: $('input[name="term_date"]').val(),
						inception_date: $('input[name="inception_date"]').val(),
						ac_region: $('input[name="ac_region"]').val(),
						ac_sub_region: $('input[name="ac_sub_region"]').val(),
						cod_country_domicile: $('input[name="cod_country_domicile"]').val(),
						liq_method: $('input[name="liq_method"]').val(),
						contracting_entity: $('input[name="contract_entity"]').val(),
						mgn_entity: $('input[name="mgn_entity"]').val(),
						ac_legal_name: $('input[name="ac_legal_name"]').val(),
						manager_name: $('input[name="manager_name"]').val(),
						cod_ccy_base: $('input[name="cod_ccy_base"]').val(),
						long_name: $('input[name="long_name"]').val(),
						mandate_id: $('input[name="mandate_id"]').val(),
						client_id: $('input[name="client_id"]').val(),
						custodian_name: $('input[name="custodian_name"]').val(),
						sub_mandate_id: $('input[name="sub_mandate_id"]').val(),
						transfer_agent_name: $('input[name="transfer_agent_name"]').val(),
						trust_bank: $('input[name="trust_bank"]').val(),
						re_trust_bank: $('input[name="re_trust_bank"]').val(),
						last_updated_by: $('input[name="last_updated_by"]').val(),
						last_approved_by: $('input[name="last_approved_by"]').val(),
						last_update_date: $('input[name="last_update_date"]').val()
					};
					
		if(obj.ac_id){
			console.log('creating user, sending', obj);
			ws.send(JSON.stringify(obj));
			showHomePanel();
			$('#user1wrap').append("<p>Create [account]:"+obj.ac_id+" [short name]:"+obj.ac_short_name+"</p>");	
			
			tmp_account='<p><span style="color:#FF0;">A new account has been created:</span><br>'+
			"[account]:"+obj.ac_id+"<br>[short name]:"+obj.ac_short_name+
			"<br>[status]:"+obj.ac_status+"<br>[term date]:"+obj.term_date+
			"<br>[inception date]:"+obj.inception_date+"<br>[region]:"+obj.ac_region+
			"<br>[sub region]:"+obj.ac_sub_region+"<br>[country domicile]:"+obj.cod_country_domicile+
			"<br>[liq method]:"+obj.liq_method+"<br>[contracting entity]:"+obj.contracting_entity+
			"<br>[mgn entity]:"+obj.mgn_entity+"<br>[account legal name]:"+obj.ac_legal_name+
			"<br>[manager name]:"+obj.manager_name+"<br>[cod_ccy_base]:"+obj.cod_ccy_base+
			"<br>[long name]:"+obj.long_name+"<br>[mandate id]:"+obj.mandate_id+
			"<br>[client id]:"+obj.client_id+"<br>[custodian name]:"+obj.custodian_name+
			"<br>[sub_mandate_id]:"+obj.sub_mandate_id+"<br>[transfer_agent_name]:"+obj.transfer_agent_name+
			"<br>[trust_bank]:"+obj.trust_bank+"<br>[re_trust_bank]:"+obj.re_trust_bank+
			"<br>[last_updated_by]:"+obj.last_updated_by+"<br>[last_approved_by]:"+obj.last_approved_by+
			"<br>[last_update_date]:"+obj.last_update_date+"</p><hr />";
			
		$('#ac_check_notice').append(tmp_account);
			$('#ac_check_button').show();
		}
		return false;
	});
	
		$('#submit2').click(function(){
		var obj = 	{
						type: 'ac_trade_setup',
						ac_id: $('input[name="t_ac_id"]').val().replace(' ', ''),
						lvts: $('input[name="lvts"]').val(),
						calypso: $('input[name="calypso"]').val(),
						aladdin: $('input[name="aladdin"]').val(),
						trade_start_date: $('input[name="t_start_date"]').val(),
						equity: $('input[name="equity"]').val(),
						fixed_income: $('input[name="fixed_income"]').val()
					};
					
		if(obj.ac_id){
			console.log('creating user, sending', obj);
			ws.send(JSON.stringify(obj));
			showHomePanel();
			$('#user1wrap').append("<p>account trades:"+obj.ac_id+" [lvts]:"+obj.lvts+"</p>");			

			tmp_actrade='<p><span style="color:#FF0;">An account trade has been created:</span><br>'+
			"[account id]:"+obj.ac_id+"<br>[lvts]:"+obj.lvts+
			"<br>[calypso]:"+obj.calypso+"<br>[aladdin]:"+obj.aladdin+
			"<br>[trade start date]:"+obj.trade_start_date+"<br>[equity]:"+obj.equity+
			"<br>[fixed_income]:"+obj.fixed_income+"</p><hr />";
			
			$('#actrade_check_notice').append(tmp_actrade);
			$('#actrade_check_button').show();
			$('#actrade_mak_noti').empty();
			
		}
		return false;
	});
	
	$('#submit3').click(function(){
		var obj = 	{
						type: 'ac_benchmark',
						ac_id: $('input[name="ben_ac_id"]').val().replace(' ', ''),
						benchmark_id: $('input[name="aben_id"]').val(),
						source: $('input[name="aben_source"]').val(),
						name: $('input[name="aben_name"]').val(),
						currency: $('input[name="aben_currency"]').val(),
						primary_flag: $('input[name="aben_pri_flag"]').val(),
						start_date: $('input[name="aben_startdate"]').val(),
						end_date: $('input[name="aben_enddate"]').val(),
						benchmark_reference_id: $('input[name="aben_ref_id"]').val(),
						benchmark_reference_id_source: $('input[name="aben_ref_id_src"]').val()
					};
					
		if(obj.ac_id){
			console.log('creating user, sending', obj);
			ws.send(JSON.stringify(obj));
			showHomePanel();
			$('#user1wrap').append("<p>account benchmarks:"+obj.ac_id+" [benchmark_id]:"+obj.benchmark_id+"</p>");		
		
		    tmp_acbench='<p><span style="color:#FF0;">An account benchmark has been created:</span><br>'+
			"[account id]:"+obj.ac_id+"<br>[benchmark_id]:"+obj.benchmark_id+
			"<br>[source]:"+obj.source+"<br>[name]:"+obj.name+
			"<br>[currency]:"+obj.currency+"<br>[primary_flag]:"+obj.primary_flag+
			"<br>[start_date]:"+obj.start_date+"<br>[end_date]:"+obj.end_date+
			"<br>[benchmark_reference_id]:"+obj.benchmark_reference_id+"<br>[benchmark_reference_id_source]:"+obj.benchmark_reference_id_source
			+"</p><hr />";
			
			$('#acbench_check_noti').append(tmp_acbench);
			$('#acbench_check_button').show();
			$('#acbench_mak_noti').empty();
			
		}
		return false;
	});
	
	$('#submit4').click(function(){
		var obj = 	{
						type: 'benchmarks',
						benchmark_id: $('input[name="benchmark_id"]').val().replace(' ', ''),
						id_source: $('input[name="ben_id_src"]').val(),
						name: $('input[name="ben_name"]').val(),
						currency: $('input[name="ben_currency"]').val(),
						benchmark_reference_id: $('input[name="ben_ref_id"]').val(),
						benchmark_reference_id_source: $('input[name="ben_ref_id_src"]').val()
					};
					
		if(obj.benchmark_id){
			console.log('creating user, sending', obj);
			ws.send(JSON.stringify(obj));
			showHomePanel();
			$('#user1wrap').append("<p>benchmarks:"+obj.benchmark_id+" [name]:"+obj.name+"</p>");		
		
			  tmp_bench='<p><span style="color:#FF0;">An account trade has been created:</span><br>'+
			"[benchmark_id]:"+obj.benchmark_id+"<br>[id_source]:"+obj.id_source+
			"<br>[name]:"+obj.name+"<br>[currency]:"+obj.currency+
			"<br>[benchmark_reference_id]:"+obj.benchmark_reference_id+"<br>[benchmark_reference_id_source]:"+obj.benchmark_reference_id_source
			+"</p><hr />";
		
		    $('#bench_check_noti').append(tmp_bench);
			$('#bench_check_button').show();
			$('#bench_mak_noti').empty();
		}
		return false;
	});
	
    String.prototype.trim=function(){
　　    return this.replace(/(^\s*)|(\s*$)/g, "");
　　 }
	
	function handleFile(files) {
    if (files.length) {
        var file = files[0];
        var reader = new FileReader();
        if (/text\/\w+/.test(file.type)) {
            reader.onload = function() {
				var i=0;
               // $('<pre>' + this.result + '</pre>').appendTo('body');
			   var lists=this.result.split(/[,:;]/);
			   var pos=0;
				while (true) {
					if (pos>=lists.length) break;
					lists[pos]=lists[pos].trim();
				    if (lists[pos].indexOf('[accounts]')>=0) {
						var obj = 	{
						type: 'create_account',
						ac_id: lists[pos+1].replace(' ', ''),
						ac_short_name: lists[pos+2].trim(),
						status: lists[pos+3].trim(),
						term_date: lists[pos+4].trim(),
						inception_date: lists[pos+5].trim(),
						ac_region: lists[pos+6].trim(),
						ac_sub_region: lists[pos+7].trim(),
						cod_country_domicile: lists[pos+8].trim(),
						liq_method: lists[pos+9].trim(),
						contracting_entity: lists[pos+10].trim(),
						mgn_entity: lists[pos+11].trim(),
						ac_legal_name: lists[pos+12].trim(),
						manager_name: lists[pos+13].trim(),
						cod_ccy_base: lists[pos+14].trim(),
						long_name: lists[pos+15].trim(),
						mandate_id: lists[pos+16].trim(),
						client_id: lists[pos+17].trim(),
						custodian_name: lists[pos+18].trim(),
						sub_mandate_id: lists[pos+19].trim(),
						transfer_agent_name: lists[pos+20].trim(),
						trust_bank: lists[pos+21].trim(),
						re_trust_bank: lists[pos+22].trim(),
						last_updated_by: lists[pos+23].trim(),
						last_approved_by: lists[pos+24].trim(),
						last_update_date: lists[pos+25].trim()
					    };
						pos+=26;
						ws.send(JSON.stringify(obj));
						$('#user1wrap').append("<p>account:"+obj.ac_id+" [short name]:"+obj.ac_short_name+"</p>");	
					} else if (lists[pos].indexOf('[account_trades_setup]')>=0) {
						var obj = 	{
						type: 'ac_trade_setup',
						ac_id: lists[pos+1].replace(' ', ''),
						lvts: lists[pos+2].trim(),
						calypso: lists[pos+3].trim(),
						aladdin: lists[pos+4].trim(),
						trade_start_date: lists[pos+5].trim(),
						equity: lists[pos+6].trim(),
						fixed_income: lists[pos+7].trim(),
					    };
						pos+=8;
						ws.send(JSON.stringify(obj));
						$('#user1wrap').append("<p>account trades:"+obj.ac_id+" [lvts]:"+obj.lvts+"</p>");			
					} else if (lists[pos].indexOf('[account_benchmarks]')>=0) {
					    	var obj = 	{
						type: 'ac_benchmark',
						ac_id: lists[pos+1].replace(' ', ''),
						benchmark_id: lists[pos+2].trim(),
						source: lists[pos+3].trim(),
						name: lists[pos+4].trim(),
						currency: lists[pos+5].trim(),
						primary_flag: lists[pos+6].trim(),
						start_date: lists[pos+7].trim(),
						end_date: lists[pos+8].trim(),
						benchmark_reference_id: lists[pos+9].trim(),
						benchmark_reference_id_source: lists[pos+10].trim()
					};
					pos+=11;
						ws.send(JSON.stringify(obj));
						$('#user1wrap').append("<p>account trades:"+obj.ac_id+" [lvts]:"+obj.lvts+"</p>");	
					} else if (lists[pos].indexOf('[benchmarks]')>=0) {
						var obj = 	{
						type: 'benchmarks',
						benchmark_id: lists[pos+1].replace(' ', ''),
						id_source: lists[pos+2].trim(),
						name: lists[pos+3].trim(),
						currency: lists[pos+4].trim(),
						benchmark_reference_id: lists[pos+5].trim(),
						benchmark_reference_id_source: lists[pos+6].trim(),
					};
					pos+=7;
					ws.send(JSON.stringify(obj));
					$('#user1wrap').append("<p>benchmarks:"+obj.benchmark_id+" [name]:"+obj.name+"</p>");	
					}
					else break;
				}
            }
            reader.readAsText(file);
        }
    }
	showHomePanel();
}
	
	
	$('#homeLink').click(function(){
		showHomePanel();
	});

	$('#createLink').click(function(){

	$('#homePanel').hide();
		$('#createPanel').fadeIn(300);
		$('#panel_acBenchmark').hide();
		$('#panel_acTradeSetup').hide();
		$('#panel_benchmark').hide();
	
	});

	$('#cr_acTradeSetup').click(function(){
		$('#homePanel').hide();
		$('#createPanel').hide();
		$('#panel_acBenchmark').hide();
		$('#panel_acTradeSetup').fadeIn(300);
		$('#panel_benchmark').hide();
	});
	$('#cr_acBenchmark').click(function(){
		$('#homePanel').hide();
		$('#createPanel').hide();
		$('#panel_acBenchmark').fadeIn(300);
		$('#panel_acTradeSetup').hide();
		$('#panel_benchmark').hide();
	});
	$('#cr_benchmark').click(function(){
		$('#homePanel').hide();
		$('#createPanel').hide();
		$('#panel_acBenchmark').hide();
		$('#panel_acTradeSetup').hide();
		$('#panel_benchmark').fadeIn(300);
	});
	
	
   $('#ac_accept').click(function(){
  	$('#actrade_mak_noti').append(tmp_account);
	tmp_account="";
	$('#ac_check_notice').empty();
	$('#ac_check_button').hide();
	$('#user1wrap').append("<p>Account Checker Accepted!</p>");	
	ws.send(JSON.stringify({type:"check_decide", checktype:"Account", checkcont:"accept"}));
	showHomePanel();
});
	
	$('#ac_decline').click(function(){
	tmp_account="";
	$('#ac_check_notice').empty();
	$('#ac_check_button').hide();
	$('#user1wrap').append("<p>Account Checker Declined!</p>");	
	ws.send(JSON.stringify({type:"check_decide", checktype:"Account", checkcont:"decline"}));
	showHomePanel();
});
	
	$('#actrade_accept').click(function(){
  	$('#acbench_mak_noti').append(tmp_actrade);
	tmp_actrade="";
	$('#actrade_check_notice').empty();
	$('#actrade_check_button').hide();
	$('#user1wrap').append("<p>Account trade Checker Accepted!</p>");	
	ws.send(JSON.stringify({type:"check_decide", checktype:"Ac_trades_setup", checkcont:"accept"}));
	showHomePanel();
});

    $('#actrade_decline').click(function(){
	tmp_actrade="";
	$('#actrade_check_notice').empty();
	$('#actrade_check_button').hide();
	$('#user1wrap').append("<p>Account trade Checker Declined!</p>");	
	ws.send(JSON.stringify({type:"check_decide", checktype:"Ac_trades_setup", checkcont:"decline"}));
	showHomePanel();
});

     $('#acbench_accept').click(function(){
  	$('#bench_mak_noti').append(tmp_acbench);
	tmp_acbench="";
	$('#acbench_check_noti').empty();
	$('#acbench_check_button').hide();
	$('#user1wrap').append("<p>Account Benchmark Checker Accepted!</p>");	
	ws.send(JSON.stringify({type:"check_decide", checktype:"Ac_benchmark", checkcont:"accept"}));
	showHomePanel();
});

    $('#acbench_decline').click(function(){
	tmp_acbench="";
	$('#acbench_check_noti').empty();
	$('#acbench_check_button').hide();
	$('#user1wrap').append("<p>Account Benchmark Checker Declined!</p>");	
	ws.send(JSON.stringify({type:"check_decide", checktype:"Ac_benchmark", checkcont:"decline"}));
	showHomePanel();
});

   $('#bench_accept').click(function(){
	tmp_bench="";
	$('#bench_check_noti').empty();
	$('#bench_check_button').hide();
	$('#user1wrap').append("<p>Benchmark Checker Accepted!</p>");	
	ws.send(JSON.stringify({type:"check_decide", checktype:"Benchmarks", checkcont:"accept"}));
	showHomePanel();
});

    $('#bench_decline').click(function(){
	tmp_bench="";
	$('#bench_check_noti').empty();
	$('#bench_check_button').hide();
	$('#user1wrap').append("<p>Benchmark Checker Declined!</p>");	
	ws.send(JSON.stringify({type:"check_decide", checktype:"Benchmarks", checkcont:"decline"}));
	showHomePanel();
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
		$('#panel_acBenchmark').hide();
		$('#panel_acTradeSetup').hide();
		$('#panel_benchmark').hide();
		
		var part = window.location.pathname.substring(0,3);
		window.history.pushState({},'', part + '/home');						//put it in url so we can f5
		
		console.log('getting new users');
		setTimeout(function(){
			//$('#user1wrap').html('');											//reset the panel
			ws.send(JSON.stringify({type: 'get', v: 1}));						//need to wait a bit
			ws.send(JSON.stringify({type: 'chainstats', v: 1}));
			
		}, 1000);
	}
	
	
	$('#nav_ac_maker').click(function(){
	$("#nav_ac_maker").removeclass();
	$("#nav_ac_maker").addclass("subnav focused");
	$("#nav_ac_checker").removeclass();
	$("#nav_ac_checker").addclass("subnav unfocused");
	$('#account_maker').show();
	$('#account_checker').hide();
});

   $('#nav_ac_checker').click(function(){
	   $("#nav_ac_maker").removeclass();
	$("#nav_ac_maker").addclass("subnav unfocused");
	$("#nav_ac_checker").removeclass();
	$("#nav_ac_checker").addclass("subnav focused");
	$('#account_maker').hide();
	$('#account_checker').show();
    });

    $('#nav_actrade_maker').click(function(){
		$("#nav_actrade_maker").removeclass();
	$("#nav_actrade_maker").addclass("subnav focused");
	$("#nav_actrade_checker").removeclass();
	$("#nav_actrade_checker").addclass("subnav unfocused");
	$('#actrade_maker').show();
	$('#actrade_checker').hide();
});

   $('#nav_actrade_checker').click(function(){
	   $("#nav_actrade_maker").removeclass();
	$("#nav_actrade_maker").addclass("subnav unfocused");
	$("#nav_actrade_checker").removeclass();
	$("#nav_actrade_checker").addclass("subnav focused");
	$('#actrade_maker').hide();
	$('#actrade_checker').show();
    });
	
	$('#nav_acbench_maker').click(function(){
	 $("#nav_acbench_maker").removeclass();
	$("#nav_acbench_maker").addclass("subnav focused");
	$("#nav_acbench_checker").removeclass();
	$("#nav_acbench_checker").addclass("subnav unfocused");
	$('#acbench_maker').show();
	$('#acbench_checker').hide();
});

   $('#nav_acbench_checker').click(function(){
	    $("#nav_acbench_maker").removeclass();
	$("#nav_acbench_maker").addclass("subnav unfocused");
	$("#nav_acbench_checker").removeclass();
	$("#nav_acbench_checker").addclass("subnav focused");
	$('#acbench_maker').hide();
	$('#acbench_checker').show();
    });

    $('#nav_bench_maker').click(function(){
		  $("#nav_bench_maker").removeclass();
	$("#nav_bench_maker").addclass("subnav focused");
	$("#nav_bench_checker").removeclass();
	$("#nav_bench_checker").addclass("subnav unfocused");
	$('#benchmark_maker').show();
	$('#benchmark_checker').hide();
});

   $('#nav_bench_checker').click(function(){
	   	  $("#nav_bench_maker").removeclass();
	$("#nav_bench_maker").addclass("subnav unfocused");
	$("#nav_bench_checker").removeclass();
	$("#nav_bench_checker").addclass("subnav focused");
	$('#benchmark_maker').hide();
	$('#benchmark_checker').show();
    });
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



