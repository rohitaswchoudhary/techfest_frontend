
/*global $, jQuery, console, alert, prompt */
$(document).ready(function () {
    'use strict';
    //-------------------------------------- Start All Variable ---------------------------------------//
    var rotate = $('.rotate'),
        rotateUl = rotate.find('.rotate-ul'),
        rotateUlLi = rotateUl.find('.rotate-ul-li'),
        rotateTime = 1000,
        hN = 0.5,
        scale = 100,
        calcWidth,
        calcHeight,
        bottomZero,
        rightZero,
        rotateFirstTop,
        i,
        scaleHeight,
        scaleWidth,
        scaleHeightAfter,
        scaleWidthAfter,
        zOndex = 999;
    //-------------------------------------- End All Variable -----------------------------------------//
    //-------------------------------------- Start All Function ---------------------------------------//
    rotateUlLi.on('click', function () {
        window.location.href = $(this).data('link');
    });
    function resetWidthHeight() {
        rotate.width(rotate.parent().width()).height(rotate.width() * hN);
        rotateUl.width(rotate.width()).height(rotate.height());
        rotateUlLi.width(rotate.width() / 3).height(rotate.height() / 1.5);
        calcWidth = rotate.width();
        calcHeight = rotate.width() * hN;
        bottomZero = calcHeight - (calcHeight / 2);
        rightZero = calcWidth - (calcWidth / 3);
        rotateFirstTop = rotateUlLi.eq(0).offset().top;
        scaleHeight = rotateUlLi.height() + scale;
        scaleWidth = rotateUlLi.width() + scale;
        scaleHeightAfter = scaleHeight - scale;
        scaleWidthAfter = scaleWidth - scale;
    }
    function runRotate() {
        rotateUlLi.eq(0).css('z-index', zOndex - 8).animate({top: bottomZero, left: calcWidth / 3, opacity: 1, height: scaleHeight, width: scaleWidth, marginLeft: -scale / 2, marginTop: -scale}, rotateTime, function () {
            rotateUlLi.eq(0).animate({border: 'none'}, rotateTime, function () {
                rotateUlLi.eq(0).animate({top: bottomZero - (calcHeight / 8), left: calcWidth / 6, opacity: 0.3, height: scaleHeightAfter, width: scaleWidthAfter, marginLeft: 0, marginTop: 0}, rotateTime, function () {
                    rotateUlLi.eq(0).animate({border: 'none'}, rotateTime, function () {
                        rotateUlLi.eq(0).animate({left: 0, top: calcHeight / 4}, rotateTime, function () {
                            rotateUlLi.eq(0).animate({border: 'none'}, rotateTime, function () {
                                rotateUlLi.eq(0).animate({top: calcHeight / 8, left: calcWidth / 6}, rotateTime, function () {
                                    rotateUlLi.eq(0).animate({border: 'none'}, rotateTime, function () {
                                        rotateUlLi.eq(0).animate({top: 0, left: calcWidth / 3}, rotateTime, function () {
                                            rotateUlLi.eq(0).animate({border: 'none'}, rotateTime, function () {
                                                rotateUlLi.eq(0).animate({top: calcHeight / 8, left: rightZero - (calcWidth / 6)}, rotateTime, function () {
                                                    rotateUlLi.eq(0).animate({border: 'none'}, rotateTime, function () {
                                                        rotateUlLi.eq(0).animate({left: rightZero, top: calcHeight / 4}, rotateTime, function () {
                                                            rotateUlLi.eq(0).animate({border: 'none'}, rotateTime, function () {
                                                                rotateUlLi.eq(0).animate({top: bottomZero - (calcHeight / 8), left: rightZero - (calcWidth / 6)}, rotateTime, function () {
                                                                    rotateUlLi.eq(0).animate({border: 'none'}, rotateTime, function () {

                                                                    });
                                                                });
                                                            });
                                                        });
                                                    });
                                                });
                                            });
                                        });
                                    });
                                });
                            });
                        });
                    });
                });
            });
        });
        rotateUlLi.eq(1).animate({top: bottomZero - (calcHeight / 8), left: calcWidth / 6, opacity: 0.3,  height: scaleHeightAfter, width: scaleWidthAfter, marginLeft: 0, marginTop: 0}, rotateTime, function () {
            rotateUlLi.eq(1).animate({border: 'none'}, rotateTime, function () {
                rotateUlLi.eq(1).animate({left: 0, top: calcHeight / 4}, rotateTime, function () {
                    rotateUlLi.eq(1).animate({border: 'none'}, rotateTime, function () {
                        rotateUlLi.eq(1).animate({top: calcHeight / 8, left: calcWidth / 6}, rotateTime, function () {
                            rotateUlLi.eq(1).animate({border: 'none'}, rotateTime, function () {
                                rotateUlLi.eq(1).animate({top: 0, left: calcWidth / 3}, rotateTime, function () {
                                    rotateUlLi.eq(1).animate({border: 'none'}, rotateTime, function () {
                                        rotateUlLi.eq(1).animate({top: calcHeight / 8, left: rightZero - (calcWidth / 6)}, rotateTime, function () {
                                            rotateUlLi.eq(1).animate({border: 'none'}, rotateTime, function () {
                                                rotateUlLi.eq(1).animate({left: rightZero, top: calcHeight / 4}, rotateTime, function () {
                                                    rotateUlLi.eq(1).animate({border: 'none'}, rotateTime, function () {
                                                        rotateUlLi.eq(1).animate({top: bottomZero - (calcHeight / 8), left: rightZero - (calcWidth / 6)}, rotateTime, function () {
                                                            rotateUlLi.eq(1).animate({border: 'none'}, rotateTime, function () {
                                                                rotateUlLi.eq(1).css('z-index', zOndex - 1).animate({top: bottomZero, left: calcWidth / 3, opacity: 1, height: scaleHeight, width: scaleWidth, marginLeft: -scale / 2, marginTop: -scale}, rotateTime, function () {
                                                                    rotateUlLi.eq(1).animate({border: 'none'}, rotateTime, function () {

                                                                    });
                                                                });
                                                            });
                                                        });
                                                    });
                                                });
                                            });
                                        });
                                    });
                                });
                            });
                        });
                    });
                });
            });
        });
        rotateUlLi.eq(2).animate({left: 0, top: calcHeight / 4}, rotateTime, function () {
            rotateUlLi.eq(2).animate({border: 'none'}, rotateTime, function () {
                rotateUlLi.eq(2).animate({top: calcHeight / 8, left: calcWidth / 6}, rotateTime, function () {
                    rotateUlLi.eq(2).animate({border: 'none'}, rotateTime, function () {
                        rotateUlLi.eq(2).animate({top: 0, left: calcWidth / 3}, rotateTime, function () {
                            rotateUlLi.eq(2).animate({border: 'none'}, rotateTime, function () {
                                rotateUlLi.eq(2).animate({top: calcHeight / 8, left: rightZero - (calcWidth / 6)}, rotateTime, function () {
                                    rotateUlLi.eq(2).animate({border: 'none'}, rotateTime, function () {
                                        rotateUlLi.eq(2).animate({left: rightZero, top: calcHeight / 4}, rotateTime, function () {
                                            rotateUlLi.eq(2).animate({border: 'none'}, rotateTime, function () {
                                                rotateUlLi.eq(2).animate({top: bottomZero - (calcHeight / 8), left: rightZero - (calcWidth / 6)}, rotateTime, function () {
                                                    rotateUlLi.eq(2).animate({border: 'none'}, rotateTime, function () {
                                                        rotateUlLi.eq(2).css('z-index', zOndex - 2).animate({top: bottomZero, left: calcWidth / 3, opacity: 1, height: scaleHeight, width: scaleWidth, marginLeft: -scale / 2, marginTop: -scale}, rotateTime, function () {
                                                            rotateUlLi.eq(2).animate({border: 'none'}, rotateTime, function () {
                                                                rotateUlLi.eq(2).animate({top: bottomZero - (calcHeight / 8), left: calcWidth / 6, opacity: 0.3,  height: scaleHeightAfter, width: scaleWidthAfter, marginLeft: 0, marginTop: 0}, rotateTime, function () {
                                                                    rotateUlLi.eq(2).animate({border: 'none'}, rotateTime, function () {

                                                                    });
                                                                });
                                                            });
                                                        });
                                                    });
                                                });
                                            });
                                        });
                                    });
                                });
                            });
                        });
                    });
                });
            });
        });
        rotateUlLi.eq(3).animate({top: calcHeight / 8, left: calcWidth / 6}, rotateTime, function () {
            rotateUlLi.eq(3).animate({border: 'none'}, rotateTime, function () {
                rotateUlLi.eq(3).animate({top: 0, left: calcWidth / 3}, rotateTime, function () {
                    rotateUlLi.eq(3).animate({border: 'none'}, rotateTime, function () {
                        rotateUlLi.eq(3).animate({top: calcHeight / 8, left: rightZero - (calcWidth / 6)}, rotateTime, function () {
                            rotateUlLi.eq(3).animate({border: 'none'}, rotateTime, function () {
                                rotateUlLi.eq(3).animate({left: rightZero, top: calcHeight / 4}, rotateTime, function () {
                                    rotateUlLi.eq(3).animate({border: 'none'}, rotateTime, function () {
                                        rotateUlLi.eq(3).animate({top: bottomZero - (calcHeight / 8), left: rightZero - (calcWidth / 6)}, rotateTime, function () {
                                            rotateUlLi.eq(3).animate({border: 'none'}, rotateTime, function () {
                                                rotateUlLi.eq(3).css('z-index', zOndex - 3).animate({top: bottomZero, left: calcWidth / 3, opacity: 1, height: scaleHeight, width: scaleWidth, marginLeft: -scale / 2, marginTop: -scale}, rotateTime, function () {
                                                    rotateUlLi.eq(3).animate({border: 'none'}, rotateTime, function () {
                                                        rotateUlLi.eq(3).animate({top: bottomZero - (calcHeight / 8), left: calcWidth / 6, opacity: 0.3,  height: scaleHeightAfter, width: scaleWidthAfter, marginLeft: 0, marginTop: 0}, rotateTime, function () {
                                                            rotateUlLi.eq(3).animate({border: 'none'}, rotateTime, function () {
                                                                rotateUlLi.eq(3).animate({left: 0, top: calcHeight / 4}, rotateTime, function () {
                                                                    rotateUlLi.eq(3).animate({border: 'none'}, rotateTime, function () {

                                                                    });
                                                                });
                                                            });
                                                        });
                                                    });
                                                });
                                            });
                                        });
                                    });
                                });
                            });
                        });
                    });
                });
            });
        });
        rotateUlLi.eq(4).animate({top: 0, left: calcWidth / 3}, rotateTime, function () {
            rotateUlLi.eq(4).animate({border: 'none'}, rotateTime, function () {
                rotateUlLi.eq(4).animate({top: calcHeight / 8, left: rightZero - (calcWidth / 6)}, rotateTime, function () {
                    rotateUlLi.eq(4).animate({border: 'none'}, rotateTime, function () {
                        rotateUlLi.eq(4).animate({left: rightZero, top: calcHeight / 4}, rotateTime, function () {
                            rotateUlLi.eq(4).animate({border: 'none'}, rotateTime, function () {
                                rotateUlLi.eq(4).animate({top: bottomZero - (calcHeight / 8), left: rightZero - (calcWidth / 6)}, rotateTime, function () {
                                    rotateUlLi.eq(4).animate({border: 'none'}, rotateTime, function () {
                                        rotateUlLi.eq(4).css('z-index', zOndex - 4).animate({top: bottomZero, left: calcWidth / 3, opacity: 1, height: scaleHeight, width: scaleWidth, marginLeft: -scale / 2, marginTop: -scale}, rotateTime, function () {
                                            rotateUlLi.eq(4).animate({border: 'none'}, rotateTime, function () {
                                                rotateUlLi.eq(4).animate({top: bottomZero - (calcHeight / 8), left: calcWidth / 6, opacity: 0.3,  height: scaleHeightAfter, width: scaleWidthAfter, marginLeft: 0, marginTop: 0}, rotateTime, function () {
                                                    rotateUlLi.eq(4).animate({border: 'none'}, rotateTime, function () {
                                                        rotateUlLi.eq(4).animate({left: 0, top: calcHeight / 4}, rotateTime, function () {
                                                            rotateUlLi.eq(4).animate({border: 'none'}, rotateTime, function () {
                                                                rotateUlLi.eq(4).animate({top: calcHeight / 8, left: calcWidth / 6}, rotateTime, function () {
                                                                    rotateUlLi.eq(4).animate({border: 'none'}, rotateTime, function () {

                                                                    });
                                                                });
                                                            });
                                                        });
                                                    });
                                                });
                                            });
                                        });
                                    });
                                });
                            });
                        });
                    });
                });
            });
        });
        rotateUlLi.eq(5).animate({top: calcHeight / 8, left: rightZero - (calcWidth / 6)}, rotateTime, function () {
            rotateUlLi.eq(5).animate({border: 'none'}, rotateTime, function () {
                rotateUlLi.eq(5).animate({left: rightZero, top: calcHeight / 4}, rotateTime, function () {
                    rotateUlLi.eq(5).animate({border: 'none'}, rotateTime, function () {
                        rotateUlLi.eq(5).animate({top: bottomZero - (calcHeight / 8), left: rightZero - (calcWidth / 6)}, rotateTime, function () {
                            rotateUlLi.eq(5).animate({border: 'none'}, rotateTime, function () {
                                rotateUlLi.eq(5).css('z-index', zOndex - 5).animate({top: bottomZero, left: calcWidth / 3, opacity: 1, height: scaleHeight, width: scaleWidth, marginLeft: -scale / 2, marginTop: -scale}, rotateTime, function () {
                                    rotateUlLi.eq(5).animate({border: 'none'}, rotateTime, function () {
                                        rotateUlLi.eq(5).animate({top: bottomZero - (calcHeight / 8), left: calcWidth / 6, opacity: 0.3,  height: scaleHeightAfter, width: scaleWidthAfter, marginLeft: 0, marginTop: 0}, rotateTime, function () {
                                            rotateUlLi.eq(5).animate({border: 'none'}, rotateTime, function () {
                                                rotateUlLi.eq(5).animate({left: 0, top: calcHeight / 4}, rotateTime, function () {
                                                    rotateUlLi.eq(5).animate({border: 'none'}, rotateTime, function () {
                                                        rotateUlLi.eq(5).animate({top: calcHeight / 8, left: calcWidth / 6}, rotateTime, function () {
                                                            rotateUlLi.eq(5).animate({border: 'none'}, rotateTime, function () {
                                                                rotateUlLi.eq(5).animate({top: 0, left: calcWidth / 3}, rotateTime, function () {
                                                                    rotateUlLi.eq(5).animate({border: 'none'}, rotateTime, function () {

                                                                    });
                                                                });
                                                            });
                                                        });
                                                    });
                                                });
                                            });
                                        });
                                    });
                                });
                            });
                        });
                    });
                });
            });
        });
        rotateUlLi.eq(6).animate({left: rightZero, top: calcHeight / 4}, rotateTime, function () {
            rotateUlLi.eq(6).animate({border: 'none'}, rotateTime, function () {
                rotateUlLi.eq(6).animate({top: bottomZero - (calcHeight / 8), left: rightZero - (calcWidth / 6)}, rotateTime, function () {
                    rotateUlLi.eq(6).animate({border: 'none'}, rotateTime, function () {
                        rotateUlLi.eq(6).css('z-index', zOndex - 6).animate({top: bottomZero, left: calcWidth / 3, opacity: 1, height: scaleHeight, width: scaleWidth, marginLeft: -scale / 2, marginTop: -scale}, rotateTime, function () {
                            rotateUlLi.eq(6).animate({border: 'none'}, rotateTime, function () {
                                rotateUlLi.eq(6).animate({top: bottomZero - (calcHeight / 8), left: calcWidth / 6, opacity: 0.3,  height: scaleHeightAfter, width: scaleWidthAfter, marginLeft: 0, marginTop: 0}, rotateTime, function () {
                                    rotateUlLi.eq(6).animate({border: 'none'}, rotateTime, function () {
                                        rotateUlLi.eq(6).animate({left: 0, top: calcHeight / 4}, rotateTime, function () {
                                            rotateUlLi.eq(6).animate({border: 'none'}, rotateTime, function () {
                                                rotateUlLi.eq(6).animate({top: calcHeight / 8, left: calcWidth / 6}, rotateTime, function () {
                                                    rotateUlLi.eq(6).animate({border: 'none'}, rotateTime, function () {
                                                        rotateUlLi.eq(6).animate({top: 0, left: calcWidth / 3}, rotateTime, function () {
                                                            rotateUlLi.eq(6).animate({border: 'none'}, rotateTime, function () {
                                                                rotateUlLi.eq(6).animate({top: calcHeight / 8, left: rightZero - (calcWidth / 6)}, rotateTime, function () {
                                                                    rotateUlLi.eq(6).animate({border: 'none'}, rotateTime, function () {

                                                                    });
                                                                });
                                                            });
                                                        });
                                                    });
                                                });
                                            });
                                        });
                                    });
                                });
                            });
                        });
                    });
                });
            });
        });
        rotateUlLi.eq(7).animate({top: bottomZero - (calcHeight / 8), left: rightZero - (calcWidth / 6)}, rotateTime, function () {
            rotateUlLi.eq(7).animate({border: 'none'}, rotateTime, function () {
                rotateUlLi.eq(7).css('z-index', zOndex - 7).animate({top: bottomZero, left: calcWidth / 3, opacity: 1, height: scaleHeight, width: scaleWidth, marginLeft: -scale / 2, marginTop: -scale}, rotateTime, function () {
                    rotateUlLi.eq(7).animate({border: 'none'}, rotateTime, function () {
                        rotateUlLi.eq(7).animate({top: bottomZero - (calcHeight / 8), left: calcWidth / 6, opacity: 0.3,  height: scaleHeightAfter, width: scaleWidthAfter, marginLeft: 0, marginTop: 0}, rotateTime, function () {
                            rotateUlLi.eq(7).animate({border: 'none'}, rotateTime, function () {
                                rotateUlLi.eq(7).animate({left: 0, top: calcHeight / 4}, rotateTime, function () {
                                    rotateUlLi.eq(7).animate({border: 'none'}, rotateTime, function () {
                                        rotateUlLi.eq(7).animate({top: calcHeight / 8, left: calcWidth / 6}, rotateTime, function () {
                                            rotateUlLi.eq(7).animate({border: 'none'}, rotateTime, function () {
                                                rotateUlLi.eq(7).animate({top: 0, left: calcWidth / 3}, rotateTime, function () {
                                                    rotateUlLi.eq(7).animate({border: 'none'}, rotateTime, function () {
                                                        rotateUlLi.eq(7).animate({top: calcHeight / 8, left: rightZero - (calcWidth / 6)}, rotateTime, function () {
                                                            rotateUlLi.eq(7).animate({border: 'none'}, rotateTime, function () {
                                                                rotateUlLi.eq(7).animate({left: rightZero, top: calcHeight / 4}, rotateTime, function () {
                                                                    rotateUlLi.eq(7).animate({border: 'none'}, rotateTime, function () {
                                                                        zOndex += 10;
                                                                        runRotate();
                                                                    });
                                                                });
                                                            });
                                                        });
                                                    });
                                                });
                                            });
                                        });
                                    });
                                });
                            });
                        });
                    });
                });
            });
        });
    }
    //-------------------------------------- End All Function -----------------------------------------//
    //-------------------------------------- Start Public ---------------------------------------------//
    resetWidthHeight();
    //-------------------------------------- End Public -----------------------------------------------//
    //-------------------------------------- Start Slider Rotate --------------------------------------//
    rotate.each(function () {
        runRotate();
    });
    //-------------------------------------- End Slider Rotate ----------------------------------------//
    //-------------------------------------- Start Window Resize --------------------------------------//
    $(window).resize(function () {
        resetWidthHeight();
    });
    //-------------------------------------- End Window Resize ----------------------------------------//
    console.log(scaleHeightAfter);
});

// Em An
// 7-2017
// https://codepen.io/collection/AGNJNB/
    /* ---- particles.js config ---- */
    