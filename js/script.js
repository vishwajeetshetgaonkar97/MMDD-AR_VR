function changeSubInfoColor(id) {
        document.getElementById(id).style.color = "#ffde00";
    }
    
    function addClickListener(cardId, subCardId, infoText) {
        document.getElementById(cardId).addEventListener('click', function() {
            document.getElementById(subCardId).innerHTML = infoText;
            changeSubInfoColor(subCardId);
        });
    }
    
    // Card 1
    addClickListener('card-1-b1', 'subCardInfo-1', 'Made Using High Strength Wood.');
    addClickListener('card-1-b2', 'subCardInfo-1', 'Comfort Cushioning for Best Quality.');
    
    // Card 2
    addClickListener('card-2-b1', 'subCardInfo-2', 'Much Needed Additional Space.');
    addClickListener('card-2-b2', 'subCardInfo-2', 'Firm base provides Support and Stability.');
    addClickListener('card-2-b3', 'subCardInfo-2', 'Extra comfort support.');
    
    // Card 3
    addClickListener('card-3-b1', 'subCardInfo-3', 'Broad Base for Best Stability.');
    addClickListener('card-3-b2', 'subCardInfo-3', 'The Ultimate Comfort.');
    addClickListener('card-3-b3', 'subCardInfo-3', 'Stability at its Finest!');
    
    // Card 4
    addClickListener('card-4-b1', 'subCardInfo-4', 'Body Hugging Comfort!');
    addClickListener('card-4-b2', 'subCardInfo-4', 'Steady and a Firm Base.');
    addClickListener('card-4-b3', 'subCardInfo-4', 'Elegant Craft.');
    