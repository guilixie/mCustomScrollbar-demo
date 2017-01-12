'use strict';

/**
 * @ngdoc function
 * @name myappApp.controller:PropController
 * @description
 * # PropController
 * Controller of the myappApp
 */
angular.module('myappApp')
  	.controller('PropController', function ($scope) {

  		
	    $scope.init = function () {
	    	$scope.codeArr = ['s','s'];
	    	$scope.properties = {};

	    	$scope.scrollBarFormat();
	    	$scope.codeSectionScrollBarFormat();
	    	$scope.setProp();
	    	$scope.bindEvent();
	    };


	    $scope.bindEvent = function () {

	    };

	    $scope.codeSectionScrollBarFormat = function () {
	    	$.mCustomScrollbar.defaults.scrollButtons.enable = true;
            $.mCustomScrollbar.defaults.axis = "yx"; 
            $("#content-l").mCustomScrollbar({    				  
				scrollInertia: 550,           
            });
            $('#code-section').mCustomScrollbar({
                scrollbarPosition: "outside",    				  
				scrollInertia: 550,                             
				autoDraggerLength: true,              
				autoHideScrollbar: true,                  
            });
	    };

	    
	    $scope.scrollBarFormat = function () {
	    	$.mCustomScrollbar.defaults.scrollButtons.enable = true; //enable scrolling buttons by default
            $.mCustomScrollbar.defaults.axis = "yx"; //enable 2 axis scrollbars by default

            $('#content-prop').mCustomScrollbar({
                setWidth: false,                                      // 设置内容的宽度 值可以是像素(int)或者百分(string)，默认false
				setHeight: false,                                     // 设置内容的高度 值可以是像素(int)或者百分(string)，默认false
				setTop: '0px',                                  // 设置内容的位置的top属性(string),默认0
				setLeft: '0px',                                 // 设置内容的位置的Left属性(string),默认0
				axis:'yx',                                          // 定义内容滚动轴线,'x'为水平，'y'为垂直(默认)，'yx'为两个方向都有
                horizontalScroll:false,                             // 定义内容滚动轴线是否为水平
                scrollbarPosition: "inside",    				  // 定义滚动条的位置是在选择器选择的元素的里面还是外面，默认inside
				scrollInertia: 550,                                // 设置滚动条的惯性值，滚动到底所需毫秒数，值越大滚动越慢，0为disable
				autoDraggerLength:true,                            // 设置滑块长度是否自动，默认是true，设置成false，则可以在样式中设置固定长度的滚动条
				autoHideScrollbar:false,                            // 是否自动隐藏那个滑块，默认是false
				autoExpandScrollbar: false,                         // 设置滚动条获取焦点，或拖拽滚动条是，是否扩大滚动条
				alwaysShowScrollbar: 0, 							  // 设置是否保持滚动条显示，甚至没有内容也显示，0 – disable (default)，1 – keep dragger rail visible，2 – keep all scrollbar components (dragger, rail, buttons etc.) visible
				snapAmount: [200,0],                                // Make scrolling snap to a multiple of a fixed number of pixels. Useful in cases like scrolling tabular data, image thumbnails or slides and you need to prevent scrolling from stopping half-way your elements. Note that your elements must be of equal width or height in order for this to work properly.
                                                                      // To set different values for vertical and horizontal scrolling, use an array: [y,x]

               	snapOffset: 100,                                    // Set an offset (in pixels) for the snapAmount option. Useful when for example you need to offset the snap amount of table rows by the table header.
				// theme: 'my-theme',                                 // 使用自定义样式
				// live: true,                                           // Enable or disable applying scrollbar(s) on all elements matching the current selector, now and in the future.
                                                                      // Set live: true when you need to add scrollbar(s) on elements that do not yet exist in the page. These could be elements added by other scripts or plugins after some action by the user takes place (e.g. lightbox markup may not exist untill the user clicks a link).
                                                                      // If you need at any time to disable or enable the live option, set live: "off" and "on" respectively.
                                                                      // You can also tell the script to disable live option after the first invocation by setting live: "once".
				// liveSelector: "#content-copy",                 // Set the matching set of elements (instead of the current selector) to add scrollbar(s), now and in the future.
				/*mouseWheel:{
					enable: false,                                 // 鼠标滚轮是否有效
					scrollAmount: 100,                             // 设置鼠标滚轮每步滚动的像素值，默认auto
					axis: 'x',                                     // 鼠标滚轮滚动x轴还是y轴的滚动滑块，默认'y',为什么'x'无效
					preventDefault: true,                           // Prevent the default behaviour which automatically scrolls the parent element when end or beginning of scrolling is reached (same bahavior with browser’s native scrollbar).
					deltaFactor: 10,                               // 设置一个滚动轮槽口（one wheel notch scrolls）的滚动像素，默认auto，为浏览器或操作系统默认
					normalizeDelta: true,                          // 启用或禁用鼠标轮加速度 (Δ),
					invert: true,                                  // 反转鼠标滚轮的滚动方向。
					disableOver: ["select","option","keygen","datalist","textarea"], // 设置当光标正在该标签禁用鼠标滚轮值,默认["select","option","keygen","datalist","textarea"]
				},
				*/
				/*
				scrollButtons:{
					enable:false,                                  // 设置滚动按钮是否有效
					scrollType:"continuous",                       // Define the buttons scrolling type/behavior，scrollType: "stepless" – continuously scroll content while pressing the button (default)
                                                                      // scrollType: "stepped" – each button click scrolls content by a certain amount (defined in scrollAmount option above)
					scrollSpeed:20,                                // 设置点击滚动按钮时候的滚动速度(默认 20) 设置一个更高的数值可以更快的滚动
					scrollAmount:40,                               // 设置按钮的滚动量(单位：像素）。
					tabindex:100                                   // 设置按钮的tabindex值
				},
				*/
				/*
				keyboard:{
					enable:false,                                  // 启用或禁用通过键盘滚动内容。
					scrollType:"continuous",                       // 同上
					scrollSpeed:20,                                // 同上
					scrollAmount:40                                // 同上
				},
				*/
				// contentTouchScroll: 10,                            // 启用或禁用触摸使能设备的内容滚动触摸功能。To completely disable, set contentTouchScroll: false.
				// documentTouchScroll: false,                        // Enable or disable document touch-swipe scrolling for touch-enabled devices.
				/*advanced:{
					autoExpandHorizontalScroll:false,                // 自动扩大水平滚动条的长度 值:true,false 设置 true 你可以根据内容的动态变化自动调整大小
					autoScrollOnFocus:'',                            // 是否自动滚动到聚焦中的对象 例如表单使用类似TAB键那样跳转焦点 值:true false
					updateOnContentResize:false,                     // 自动根据动态变换的内容调整滚动条的大小 值:true,false 设置成 true 将会不断的检查内容的长度并且据此改变滚动条大小 建议除非必要不要设置成 true 如果页面中有很多滚动条的时候 它有可能会产生额外的移出 你可以使用 update 方法来替代这个功能
					updateOnImageLoad:false,
					updateOnSelectorChange:'',
					extraDraggableSelectors:'',
					releaseDraggableSelectors:'',
					autoUpdateTimeout: 1000
				},
				callbacks:{
					onCreate: function(){},
					onInit: function(){},
					onScrollStart:function(){},      // 使用自定义的回调函数在滚动时间开始的时候执行
					onScroll:function(){},           // 自定义回调函数在滚动中执行
					whileScrolling:function(){},     // 当滚动的时候调用这个自定义回调函数
					onTotalScroll:function(){},      // 当滚动到底部的时候调用这个自定义回调函数
					onTotalScrollBack:function(){},  // 当滚动到顶部的时候调用这个自定义回调函数
					onTotalScrollOffset:0,           // 设置到达顶部或者底部的偏移量 像素单位
					onTotalScrollBackOffset:0,       // 设置到达底部或者顶部的偏移量 像素单位
					alwaysTriggerOffsets: false,
					onOverflowY: function(){},
					onOverflowX: function(){},
					onOverflowYNone: function(){},
					onOverflowXNone: function(){},
					onBeforeUpdate: function(){},
					onUpdate: function(){},
					onImageLoad: function(){},
					onSelectorChange: function(){},

				}*/
            });

	    };

	    //设置基本属性
	    $scope.setProp = function () {
	    	var tempWidth = '';
	    	$scope.codeArr = [];
	    	//
	    	if(!!$scope.properties.widthUnit){
	    		if($scope.properties.widthUnit.indexOf('px') > -1){
	    			if(!!$scope.properties.setWidth){
	    				tempWidth = 'setWidth: ' + $scope.properties.setWidth + ',';
	    			}
	    			else{
	    				tempWidth = 'setWidth: false,';
	    			}
	    		}
	    		else{
	    			if(!!$scope.properties.setWidth){
	    				tempWidth = 'setWidth: "' + $scope.properties.setWidth + '%",';
	    			}
	    			else{
	    				tempWidth = 'setWidth: false,';
	    			}
	    		}

	    		$scope.codeArr.push(tempWidth);
	    	}


	    };
  	});