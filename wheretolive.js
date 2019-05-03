function fadeIn(slow)
{
   $(this).fadeIn( fadeOut );
}

function fadeOut()
{
   $(this).fadeOut( fadeIn );
}

fadeIn.call($("#sellyoak"));
