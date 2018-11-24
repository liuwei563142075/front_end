function Prodect( option ) {
    this.__init( option );
}
Prodect.prototype = {
    /**
     *
     * @private
     */
    __init: function ( option ) {
        this.picture = option.picture;
        this.discount = option.discount;
        this.discribe = option.discribe;
        this.prePrice = option.prePrice;
        this.price = option.price;
        this.count = option.count;
    },
    bindDOM:function() {
        var str = '';
        str += '<tr>'
            str += '<td>'+this.picture+'</td>' +
                    '<td>'+this.discount+'</td>' +
                    '<td>'+this.discribe+'</td>' +
                    '<td>'+this.prePrice+'</td>' +
                    '<td>'+this.price+'</td>'+
                    '<td>'+this.count+'</td>';
        str += '</tr>'
        return str;
    }
}