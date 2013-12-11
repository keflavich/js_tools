// Find all checkboxes on a page and mark them True
var allElems = document.getElementsByTagName('input');
for (i = 0; i < allElems.length; i++) {
        if (allElems[i].type == 'checkbox') {
                    allElems[i].checked = true;
                        }
}
