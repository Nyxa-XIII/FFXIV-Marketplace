import { Component } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { ItemRequest } from '../item-request';

@Component({
  selector: 'itemRequests',
  templateUrl: './item-requests.component.html',
  styleUrls: ['./item-requests.component.css']
})
export class ItemRequestsComponent {

  items = ['Beeswax', 'Copper Ore',
            'Ice Shard', 'Muddy Water'];

  model = new ItemRequest(this.items[0], 0, '');
  submitList = [this.items[0], 0, ''];

  submitted = false;

  onSubmit() { this.submitted = true; }

  newItemRequest() {
    this.model = new ItemRequest('', 0, '');
  }

  submitItemRequest() {
    alert("ya");

  //   $(document).ready(function() {

  //     $("#display").click(function() {                
  
  //       $.ajax({    //create an ajax request to display.php
  //         type: "GET",
  //         url: "display.php",             
  //         dataType: "html",   //expect html to be returned                
  //         success: function(response){                    
  //             $("#responsecontainer").html(response); 
  //             //alert(response);
  //         }
  
  //     });
  // });
  // });

  //   const XIVAPI = require('@xivapi/js');

  //   const xiv = new XIVAPI();

  //   try {
  //       let response = await xiv.search("Shroud Cherry Sapling")
  //       alert(response);
  //     } catch(error) {
  //       alert(error);
  // }
  }

}
