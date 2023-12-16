$(document).ready(function () {

    var totalPrice = 0;

    //Form on click event

    $('#submit').click(function (e) {
        e.preventDefault();
        $('#warning').empty()
        var productName = $("#productname").val();
        var quantity = $("#quantity").val();
        var price = $("#price").val();
        var total = quantity * price;
        totalPrice += total;
        if (productName != "" && quantity != "" && price != "") {
            $('#product-table tbody').append('<tr><td>' + productName + '</td><td>' + quantity + '</td><td>₹' + price + '</td><td>₹' + total + '</td><tr>')
            $('#total').text('₹' + totalPrice)

        }
        else {
            $('#warning').append('<span>Please fill all the necessary details in the form</span>')
        }




    })
     //Form reset
    $('#reset').click(function (e) {
        e.preventDefault();
        $("#productname").val("");
        $("#quantity").val("");
        $("#price").val("");
    });

    $('#addIcon').click(function(){
        $('#product-area').append('<div class="form-group col-md-4"><label>Product Name</label><input type="text" class="form-control" id="productname" placeholder="Product name"></div><div class="form-group col-md-4"><label>Quantity</label><input type="number" class="form-control" id="quantity" placeholder="Quantity"></div><div class="form-group col-md-4"><label>Price</label><input type="number" class="form-control" id="price" placeholder="Price"></div>')
    })

});
