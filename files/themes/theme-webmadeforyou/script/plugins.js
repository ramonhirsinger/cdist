$(function() {
    $.fn.EveryWhat = function(arg1) {
        var arr = [];
        if($.isNumeric(arg1)) {
            $.each(this, function(idx, item) {
                var newNum = idx + 1;
                if(newNum%arg1 === 0)
                arr.push(item);
            });
        }
        
        return this.pushStack(arr, "EveryWhat", "");
    }
});
