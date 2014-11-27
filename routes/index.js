
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index', { title: 'Tele2 HackDay', project: 'digital-coupons' , name: 'Hasnain' });
};