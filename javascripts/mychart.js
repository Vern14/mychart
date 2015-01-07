      google.load("visualization", "1.1", {packages:["wordtree"]});
      google.setOnLoadCallback(drawSimpleNodeChart);
      function drawSimpleNodeChart() {
        var nodeListData = new google.visualization.DataTable();
		
        nodeListData.addColumn('number', 'id');
        nodeListData.addColumn('string', 'childLabel');
        nodeListData.addColumn('number', 'parent');
        nodeListData.addColumn('number', 'size');
        nodeListData.addColumn('number', 'color');
        nodeListData.addRow([0, 'Vernon Zidana', -1, 1, 0]);
        nodeListData.addRow([1, 'Front-End', 0, 5, 0]);
        nodeListData.addRow([2, 'Back-End', 0, 5, 0]);
        nodeListData.addRow([3, 'OOP', 0, 5, 0]);
		nodeListData.addRow([4, 'CMS', 0, 5, 0]);
		nodeListData.addRow([5, 'APIs', 0, 5, 0]);
		nodeListData.addRow([6, 'Version Control', 0, 5, 0]);
		nodeListData.addRow([7, 'IDEs', 0, 5, 0]);
		nodeListData.addRow([8, 'Server', 0, 5, 0]);
		nodeListData.addRow([9, 'Debug Tool', 0, 5, 0]);
		nodeListData.addRow([10, 'Browsers', 0, 5, 0]);
		nodeListData.addRow([11, 'Design Patterns', 0, 5, 0]);
		nodeListData.addRow([52, 'Photo-Editing', 0, 5, 0]);
		nodeListData.addRow([56, 'Technical Writing', 0, 5, 0]);
		nodeListData.addRow([57, 'Software Engineering', 0, 5, 0]);
		
		// first sub branches
        nodeListData.addRow([12, 'Html', 1, 3, 0]);
		
        nodeListData.addRow([14, 'CSS', 1, 3, 0]);
        nodeListData.addRow([15, 'JavaScript', 1, 3, 0]);
    
        nodeListData.addRow([17, 'Twitter Bootstrap UI', 1, 3, 0]);
		
		nodeListData.addRow([18, 'Php5', 2, 3, 0]);
        nodeListData.addRow([19, 'MySQL', 2, 3, 0]);
		
		nodeListData.addRow([20, 'Php5', 3, 3, 0]);
        nodeListData.addRow([21, 'Java', 3, 3, 0]);
		nodeListData.addRow([22, 'C++', 3, 3, 0]);
		
		nodeListData.addRow([23, 'WordPress', 4, 3, 0]);
		nodeListData.addRow([24, '', 4, 3, 0]);
		
		nodeListData.addRow([25, 'Google Maps API', 5, 3, 0]);
		nodeListData.addRow([26, 'Html5 Drag and Drop API', 5, 3, 0]);
		nodeListData.addRow([27, 'Google Visualization API', 5, 3, 0]);
		
		nodeListData.addRow([28, 'GitHub', 6, 3, 0]);
		nodeListData.addRow([29, '', 6, 3, 0]);

		nodeListData.addRow([30, 'Eclipse', 7, 3, 0]);
		nodeListData.addRow([31, 'Notepad++', 7, 3, 0]);
		nodeListData.addRow([32, 'xcode', 7, 3, 0]);
		nodeListData.addRow([33, 'CommandPrompt', 7, 3, 0]);
		
		nodeListData.addRow([34, 'XAMPP', 8, 3, 0]);
		nodeListData.addRow([35, 'MAMP', 8, 3, 0]);
		
		nodeListData.addRow([36, 'Firebug', 9, 3, 0]);
		nodeListData.addRow([37, '', 9, 3, 0]);
		
		nodeListData.addRow([38, 'Chrome', 10, 3, 0]);
		nodeListData.addRow([39, 'Opera', 10, 3, 0]);
		nodeListData.addRow([40, 'Firefox', 10, 3, 0]);
		nodeListData.addRow([41, 'Safari', 10, 3, 0]);	
		nodeListData.addRow([42, 'IE', 10, 3, 0]);			
        
		nodeListData.addRow([43, 'MVC (Model View Controller)', 11, 3, 0]);	
		nodeListData.addRow([44, '', 11, 3, 0]);
		
		// second sub branches
		nodeListData.addRow([45, 'Html5', 12, 3, 0]);
		nodeListData.addRow([46, 'Xhtml', 12, 3, 0]);
		nodeListData.addRow([47, 'Html DOM', 12, 3, 0]);
	
		nodeListData.addRow([48, 'CSS', 14, 3, 0]);
		nodeListData.addRow([49, 'CSS3', 14, 3, 0]);
       
	    nodeListData.addRow([50, 'JavaScript', 15, 3, 0]);
		nodeListData.addRow([51, 'jQuery', 15, 3, 0]);
		
		nodeListData.addRow([53, 'Photoshop', 52, 3, 0]);
		nodeListData.addRow([54, 'Paint', 52, 3, 0]);
		nodeListData.addRow([55, 'Picassa', 52, 3, 0]);
		
		nodeListData.addRow([58, 'LaTex', 56, 3, 0]);
		nodeListData.addRow([59, '', 56, 3, 0]);
		
		nodeListData.addRow([60, 'Requirements', 57, 3, 0]);
		nodeListData.addRow([61, 'Design', 57, 3, 0]);
		nodeListData.addRow([62, 'Implementation', 57, 3, 0]);
		nodeListData.addRow([64, 'Evaluation', 57, 3, 0]);
		nodeListData.addRow([65, 'Oral defense', 57, 3, 0]);
		nodeListData.addRow([66, 'Maintainance', 57, 3, 0]);
		
	
        
		var options = {
          colors: ['black', 'black', 'black'],
          wordtree: {
            format: 'explicit',
            type: 'suffix'
          }
        };

        var wordtree = new google.visualization.WordTree(document.getElementById('wordtree_explicit'));
        wordtree.draw(nodeListData, options);
      }

	  

function myFunction(){  
    document.getElementById("wordtree_explicit").style.width="100%";
	document.getElementById("wordtree_explicit").style.marginLeft="-2%";	
	document.body.style.overflowX="hidden";	
}
	  
onload =function(){
document.body.style.overflowX="hidden";
}
